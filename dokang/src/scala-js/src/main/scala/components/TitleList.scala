package components

import actions.{AppModel, Article}
import diode.react.ModelProxy
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import store.AppCircuit

object TitleList {

  case class Props(articles: List[Article])

  final class Backend($: BackendScope[Props, Unit]) {
    def render(p: Props): VdomElement ={
      <.ul(^.className:="list-group list-group-flush")(
        p.articles.map(article =>
          <.li(^.className:="list-group-item", ^.key:=article.id) (
            article.title
          )
        ).toTagMod
      )
    }
  }

  val Component = ScalaComponent.builder[Props]("TitleList")
    .renderBackend[Backend]
    .build
  def apply()= {
    val connector = AppCircuit.connect(_.articles)
    connector(p => Component(Props(p.value)))
  }
}

