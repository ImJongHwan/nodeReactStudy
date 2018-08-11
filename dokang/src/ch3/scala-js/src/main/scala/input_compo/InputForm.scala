package input_compo

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import japgolly.scalajs.react.extra._

import scala.scalajs.js.RegExp

object InputForm {

  final case class Props(name: String, label: String, value: String, filter: RegExp, pattern: RegExp,
                         onChange: Changed => Unit) {
    @inline def render: VdomElement = Component(this)
    def checkValue(str: String): Boolean = {
      pattern.test(str)
    }
  }

  case class Changed(name: String, value: String, isOK: Boolean)
  final case class State(value: String, isOK: Boolean)

  object State {
    def init(props: Props): State = {
      State(props.value, props.checkValue(props.value))
    }
  }

  final class Backend($: BackendScope[Props, State]) {
    def componentWillReceiveProps: Callback = {
      $.modState{ (state, nextProps) =>
        val newV = nextProps.value
        state.copy(value = newV, isOK = nextProps.checkValue(newV))
      }
    }

    def handleChange(e: ReactEventFromInput): Callback = {
      val v = e.target.value
      $.modState { (state, props) =>
        val newValue = v.replaceAll(props.filter.source, "")
        val newIsOk = props.checkValue(newValue)
        props.onChange(Changed(props.name, newValue, newIsOk))
        state.copy(value = newValue, isOK = newIsOk)
      }
    }

    def render(p: Props, s: State): VdomElement = {
      val msg: VdomElement = renderStatusMessage(s)
      <.div(
        <.label(s"${p.label}: ", <.br,
          <.input(^.`type`:="text", ^.value := s.value, ^.onChange ==> handleChange ),
          msg
        )
      )
    }

    def renderStatusMessage(s: State): VdomElement = {
      val styleObj = TagMod(^.margin:="8px", ^.padding:="8px", ^.color:="white")
      if (s.isOK) <.span(styleObj, ^.backgroundColor:="green")("OK")
      else <.span(styleObj, ^.backgroundColor:="red")("NG")
    }
  }

  val Component = ScalaComponent.builder[Props]("InputForm")
    .initialStateFromProps(State.init)
    .renderBackend[Backend]
    .componentWillReceiveProps(_.backend.componentWillReceiveProps)
    .build
}

