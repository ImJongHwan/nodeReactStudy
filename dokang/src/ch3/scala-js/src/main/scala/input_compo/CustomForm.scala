package input_compo

import input_compo.InputForm.Changed
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom
import upickle.default.{ReadWriter => RW, macroRW}

import scala.scalajs.js.RegExp


object CustomForm {

  final case class State(email: String, tel: String, oks: Set[String]) {
    val allok: Boolean = oks == Set("email", "tel")
    def toJson: String = upickle.default.write(this)
  }
  object State {
    implicit def rw: RW[State] = macroRW
  }

  final class Backend($: BackendScope[Unit, State]) {
    def handleChange(e: Changed): Unit = {
      $.modState { state =>
        val okUpdated = if(e.isOK) state.copy(oks = state.oks + e.name) else state
        e.name match {
          case "email" =>
            println("email input: %s".format(e.value))
            okUpdated.copy(email = e.value)
          case "tel" => okUpdated.copy(tel = e.value)
          case _ => println(s"${e.name} is unknown FormInput"); okUpdated
        }
      }.runNow
    }
    def handleSubmit(e: ReactEvent): Callback = {
      e.preventDefault()
      $.state.map { s =>
        dom.window.alert(s.toJson)
      }
    }

    def render(s: State): VdomElement = {
      val emailPat = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
      val asciiFilter = RegExp("[^\u0020-\u007e]+","g")
      val telPat = RegExp("^[0-9-()+]+$")
      val telFilter = RegExp("[^0-9-()+]", "g")

      <.form(^.onSubmit==>handleSubmit)(
        InputForm.Component(InputForm.Props("email", "메일 주소", s.email, asciiFilter, emailPat, handleChange)),
        InputForm.Component(InputForm.Props("tel", "전화 번호", s.tel, telFilter, telPat, handleChange)),
        <.input(^.`type`:="submit", ^.value:="전송", ^.disabled:=(!s.allok))
      )
    }
  }

  val Component = ScalaComponent.builder[Unit]("CustomForm")
    .initialState(State(email="a", tel="", oks = Set.empty))
    .renderBackend[Backend]
    .build
}

