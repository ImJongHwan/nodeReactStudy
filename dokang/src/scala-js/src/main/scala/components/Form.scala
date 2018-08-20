package components

import actions.{AddArticle, Article}
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import store.AppCircuit

object Form {

  case class Props(addArticle: Article => Callback)
  case class State(title: String)

  final class Backend($: BackendScope[Props, State]) {
    def handleChange(event: ReactEventFromInput): Callback = {
      val target = event.target
      $.modState { state =>
        target.id match {
          case "title" => state.copy(title = target.value)
          case _ => state
        }
      }
    }
    def handleSubmit(event: ReactEventFromInput): Callback = {
      event.preventDefault()
      val dispatchCB = {
        $.state >>= { state =>
          val title = state.title
          val id = Article.randomId
          $.props >>= { props =>
            props.addArticle(Article(id, title))
          }
        }
      }
      val resetTitleCB = $.modState(_.copy(title = ""))
      dispatchCB >> resetTitleCB
    }
    def render(p: Props, s: State): VdomElement = {
      <.form(^.onSubmit ==> handleSubmit ) (
        <.div(^.className:="form-group") (
          <.label(^.htmlFor:="title")("Title"),
          <.input(
            ^.`type`:="text", ^.className:="form-control",
            ^.id:="title", ^.value:=s.title,
            ^.onChange ==> handleChange
          )
        ),
        <.button(^.`type`:="submit", ^.className:="btn btn-success btn-lg")(
          "SAVE"
        )
      )
    }
  }

  val Component = ScalaComponent.builder[Props]("Form")
    .initialState(State(""))
    .renderBackend[Backend]
    .build
  def apply() = {
    val addArticle = { article: Article => Callback { AppCircuit.dispatch(AddArticle(article)) } }
    Component(Props(addArticle))
  }
}

