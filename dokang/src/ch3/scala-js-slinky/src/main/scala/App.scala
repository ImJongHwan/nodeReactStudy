
import org.scalajs.dom.document
import slinky.web.ReactDOM

object App {
  def main(args: Array[String]): Unit = {
    val mountedDomNode = document.getElementById("root")
    ReactDOM.render(SAgent(), mountedDomNode)
  }
}
