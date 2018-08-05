import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom.document


object Cycle {
  def main(args: Array[String]): Unit = {
    val mountNode = document.getElementById("root")
    App.Component().renderIntoDOM(mountNode)
  }
}

object App {

  case class State(r: Double)

  class Backend($: BackendScope[Unit, State]) {
    def render(state: State): VdomElement = {
      println("render")
      def setStateHandler(e: ReactEventFromInput): CallbackTo[Unit] = {
        $.setState(State(r = Math.random()))
      }
      <.div(
        <.button(^.onClick ==> setStateHandler,
          "setState"
        )
      )
    }
  }

  val Component = ScalaComponent.builder[Unit]("App")
    .initialState(State(Math.random()))
    .renderBackend[Backend]
    .componentWillMount { _ => CallbackTo(println("componentWillMount"))}
    .componentDidMount { _ => CallbackTo(println("componentDidMount"))}
    .componentWillReceiveProps(_ => CallbackTo(println("componentWillReceiveProps")))
    .shouldComponentUpdate(_ => CallbackTo{println("shouldComponentUpdate"); true})
    .componentWillUpdate(_ => CallbackTo{println("componentWillUpdate")})
    .componentDidUpdate(_ => CallbackTo{println("componentDidUpdate")})
    .componentWillUnmount(_ => CallbackTo{println("componentWillUnmount")})
    .build
}
