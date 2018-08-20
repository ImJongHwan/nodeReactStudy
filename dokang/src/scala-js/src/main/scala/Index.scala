
import components.App
import org.scalajs.dom.document


object Index {
  def main(args: Array[String]): Unit = {
    val mountNode = document.getElementById("root")
    App().renderIntoDOM(mountNode)
  }
}

