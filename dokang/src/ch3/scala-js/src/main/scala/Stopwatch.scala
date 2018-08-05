
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import japgolly.scalajs.react.extra._
import org.scalajs.dom.html.Span

import scala.scalajs.js
import scala.scalajs.js.Date
import scala.scalajs.js.timers.SetIntervalHandle

object Stopwatch {

  final case class State(isLive: Boolean, curTime: Double, startTime: Double)

  final class Backend($: BackendScope[Unit, State]) {
    private var timerId: SetIntervalHandle = _

    def componentWillMount(): Callback = Callback {
      timerId = js.timers.setInterval(1000){ tick.runNow() }
    }
    def componentWillUnmount(): Callback = Callback {
      js.timers.clearInterval(timerId)
    }
    def tick: Callback = {
      $.modState { state =>
        if (state.isLive) {
          val v = new Date().getTime()
          state.copy(curTime = v)
        }
        else state
      }
    }
    def clickHandler(e: ReactEventFromInput): Callback = {
      $.modState { state =>
        if (state.isLive) state.copy(isLive = false)
        else {
          val v = new Date().getTime()
          state.copy(isLive = true, curTime = v, startTime = v)
        }
      }
    }
    def getDisp: CallbackTo[VdomTagOf[Span]] = {
      $.state.map { s =>
        val delta = s.curTime - s.startTime
        val t = delta / 1000
        val hhmmss = List(t / (60 * 60), (t / 60) % 60, t % 60).map(Math.floor)
        def zeroAdded(i: Double) = {
          val s = "0" + i.toString
          s.substring(s.length - 2)
        }
        <.span(^.className:="disp",
          hhmmss.map(zeroAdded).mkString(":")
        )
      }
    }
    def render(state: State): VdomElement = {
      val label = if (state.isLive) "STOP" else "START"
      val disp = getDisp.runNow()
      <.div(^.className:="Stopwatch",
        <.div(disp),
        <.button(^.onClick ==> clickHandler, label)
      )
    }
  }

  val Component = ScalaComponent.builder[Unit]("Stopwatch")
    .initialState(State(isLive = false, 0, 0))
    .renderBackend[Backend]
    .componentWillMount(_.backend.componentWillMount())
    .componentWillUnmount(_.backend.componentWillUnmount())
    .build
}
