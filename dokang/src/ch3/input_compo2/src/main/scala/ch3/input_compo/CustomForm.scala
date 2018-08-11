package ch3.input_compo

import org.scalajs.dom
import org.scalajs.dom.Event
import slinky.core.{Component, StatelessComponent}
import slinky.core.annotations.react
import slinky.core.facade.ReactElement
import slinky.web.html._

import scala.scalajs.js.{JSON, RegExp}

@react class CustomForm extends Component {
  type Props = Unit
  case class State(oks: Set[String], inputs: Map[String, String]) {
    val allok: Boolean = oks == Set("email", "tel")
    val email: String = inputs.getOrElse("email", "")
    val tel: String = inputs.getOrElse("tel", "")
  }

  override def initialState: State = State(Set.empty, Map("email" -> "", "tel" -> ""))

  def handleChange(changed: Changed): Unit = {
    val oks = if (changed.isOK) state.oks + changed.name else state.oks
    val inputs = state.inputs + (changed.name -> changed.value)
    this.setState(state.copy(oks = oks, inputs = inputs))
  }
  def handleSubmit(e: Event): Unit= {
    dom.window.alert(this.state.toString)
    e.preventDefault()
  }

  def render(): ReactElement = {
    val emailPat = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
    val asciiFilter = RegExp("[^\u0020-\u007e]+", "g")
    val telPat = RegExp("^[0-9-()+]+$")
    val telFilter = RegExp("[^0-9-()+]", "g")
    form(onSubmit:=(e => handleSubmit(e)))(
      FromInput(name="email", label="메일 주소", value=this.state.email, filter=asciiFilter, pattern=emailPat, onChange=handleChange),
      FromInput(name="tel", label="전화 번호", value=this.state.tel, filter=telFilter, pattern=telPat, onChange=handleChange),
      input(`type`:="submit", value:="전송", disabled:=(!this.state.allok))
    )
  }
}
