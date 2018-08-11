package ch3.input_compo

import org.scalajs.dom.Event
import org.scalajs.dom.raw.HTMLInputElement
import slinky.core.{Component, StatelessComponent}
import slinky.core.annotations.react
import slinky.core.facade.ReactElement
import slinky.web.html._

import scala.scalajs.js
import scala.scalajs.js.RegExp

case class Changed(target: FromInput, value: String, isOK: Boolean, name: String)

@react class FromInput extends Component {
  case class Props(name: String, label: String, value: String, filter: RegExp, pattern: RegExp, onChange: Changed => Unit)
  case class State(value: String, isOK: Boolean)

  override def initialState: State = {
    val v = this.props.value
    State(v, checkValue(v))
  }
  def checkValue(str: String): Boolean = {
    this.props.pattern.test(str)
  }
  def handleChange(e: Event) {
    val v = e.target.asInstanceOf[HTMLInputElement].value
    println(v)
    val newValue = v.replaceAll(this.props.filter.source, "")
    val newIsOK = checkValue(newValue)
    this.setState(_.copy(newValue, newIsOK))
    this.props.onChange(Changed(this, newValue, newIsOK, this.props.name))
  }

  override def componentWillReceiveProps(nextProps: Props): Unit = {
    this.setState(_.copy(
      value = nextProps.value,
      isOK = checkValue(nextProps.value)
    ))
  }

  override def render(): ReactElement = {
    val msg = renderStatusMessage()
    div(
      label(s"${this.props.label}: ", br(),
        input(`type`:="text", value:=this.state.value, onChange:= (e =>this.handleChange(e))),
        msg
      )
    )
  }

  def renderStatusMessage(): ReactElement = {
    val msg = {
      if (this.state.isOK) {
        val newSo = js.Dynamic.literal(margin = "8px", padding = "8px", color = "white", backgroundColor = "green")
        span(style:=newSo)("OK")
      }
      else {
        val newSo = js.Dynamic.literal(margin = "8px", padding = "8px", color = "white", backgroundColor = "red")
        span(style:=newSo)("NG")
      }
    }
    msg
  }
}
