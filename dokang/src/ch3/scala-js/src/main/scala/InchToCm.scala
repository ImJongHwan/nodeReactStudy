
import ValueInput.Props
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import japgolly.scalajs.react.extra._

object InchToCm {

  final case class State(inch: Double, cm: Double)

  final class Backend($: BackendScope[Unit, State]) {
    def inchChanged(n: Double): Callback = {
      $.modState(_.copy(inch = n, cm = n * 2.54))
    }
    def cmChanged(n: Double): Callback = {
      $.modState(_.copy(inch = n / 2.54, cm = n))
    }
    def render(s: State): VdomElement = {
      <.div(
        ValueInput.Component(Props("cm", cmChanged, s.cm)),
        ValueInput.Component(Props("inch", inchChanged, s.inch))
      )
    }
  }

  val Component = ScalaComponent.builder[Unit]("InchToCm")
    .initialState(State(0.0, 0.0))
    .renderBackend[Backend]
    .build
}

object ValueInput {
  final case class Props(title: String, onChange: Double => Callback, value: Double)
  final case class State(value: Double)

  final class Backend($: BackendScope[Props, State]) {
    def handleChange(e: ReactEventFromInput): Callback = {
      val v = e.target.value
      val filtered = v.replaceAll("[^0-9.]+", "").toDouble
      $.modState(s => s.copy(value = filtered))
      $.props.flatMap(_.onChange(filtered))
    }
    def componentWillReceiveProps(nextProps: Props): Callback = {
      $.modState(_.copy(value = nextProps.value))
    }
    def render(p:Props, s: State): VdomElement = {
      <.div(
        <.label(
          s"${p.title}: ", <.br,
          <.input(^.`type`:="text", ^.value:=s.value, ^.onChange ==> handleChange)
        )
      )
    }
  }
  val Component = ScalaComponent.builder[Props]("ValueInput")
    .initialStateFromProps(props => State(props.value))
    .renderBackend[Backend]
    .componentWillReceiveProps(x => x.backend.componentWillReceiveProps(x.nextProps))
    .build
}
