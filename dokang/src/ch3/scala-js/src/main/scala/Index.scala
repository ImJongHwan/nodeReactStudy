import input_compo.CustomForm
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom.document


object Index {
  def main(args: Array[String]): Unit = {
    val mountNode = document.getElementById("root")
//    Cycle.Component().renderIntoDOM(mountNode)
//    InchToCm.Component().renderIntoDOM(mountNode)
    CustomForm.Component().renderIntoDOM(mountNode)
  }
}

