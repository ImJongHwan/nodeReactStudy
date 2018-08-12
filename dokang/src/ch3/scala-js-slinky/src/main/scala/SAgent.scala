import org.scalajs.dom.ext.Ajax
import org.scalajs.dom.raw.XMLHttpRequest

import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue
import slinky.core.Component
import slinky.core.annotations.react
import slinky.core.facade.ReactElement
import slinky.web.html._
import upickle.default.{ReadWriter => RW, macroRW}

import scala.util.{Failure, Success, Try}

case class Item(name: String, price: Int)
object Item {
  implicit def rw: RW[Item] = macroRW
}

@react class SAgent extends Component {
  type Props = Unit
  case class State(items: List[Item])

  def initialState: State = {
    State(List.empty)
  }

  override def componentWillMount(): Unit = {
    Ajax.get("./fruits.json")
      .onComplete(loadedJson)
  }

  def loadedJson(xhrTry: Try[XMLHttpRequest]): Unit = {
    xhrTry match {
      case Failure(e) => println("JSON을 읽어들이는동안 오류가 발생했습니다.")
      case Success(xhr) =>
        val data = upickle.default.read[List[Item]](xhr.responseText)
        this.setState(_.copy(items = data))
    }
  }


  def render(): ReactElement = {
    if (state.items.isEmpty) {
      div(className:="App")("읽어들이는 중입니다.")
    }
    else {
      val options = {
        this.state.items.map { e =>
          option(value:=e.price.toString, key:=e.name)(e.name)
        }
      }
      div(className:="App")(
        "과일: ", select(options)
      )
    }
  }

}
