import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom.document

import scala.scalajs.js
import scala.scalajs.js.Date


object StClock {
  def main(args: Array[String]): Unit = {
    val mountNode = document.getElementById("root")
    Clock.Component().renderIntoDOM(mountNode)
  }
}

object Clock {

  case class State(now: js.Date)

  object State {
    def init: State =
      State(new Date)
  }

  class Backend($: BackendScope[Unit, State]) {
    def setInterval() = Callback {
      js.timers.setInterval(1000) {
        $.modState(s => s.copy(now = new Date)).runNow()
      }
    }
    def render(state: State): VdomElement = {
      val now = state.now
      val hms = List(now.getHours(), now.getMinutes(), now.getSeconds())
      val hhmmss = hms.map { i =>
        val zeroAdded = "0" + i.toString
        zeroAdded.substring(zeroAdded.length - 2)
      }
      <.div(hhmmss.mkString(":"))
    }
  }

  val Component = ScalaComponent.builder[Unit]("Clock")
    .initialState(State.init)
    .renderBackend[Backend]
    .componentWillMount(_.backend.setInterval)
    .build
}
