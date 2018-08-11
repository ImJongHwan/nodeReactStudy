
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom
import dom.ext.Ajax
import org.scalajs.dom.ext.Ajax.InputData

import scala.util.{Failure, Success, Try}
import upickle.default.{ReadWriter => RW, macroRW}

object SAgent {
  final case class State(items: List[Item])
  case class Item(name: String, price: Int)
  object Item {
    implicit def rw: RW[Item] = macroRW
  }

  object State {
    def init: State =
      State(List.empty)
  }

  final class Backend($: BackendScope[Unit, State]) {
    import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue
    def componentWillMount: Callback = Callback {
      Ajax.get("./fruits.json")
        .onComplete( xhr => loadedJSON(xhr))
    }
    def loadedJSON(xhrTry: Try[dom.XMLHttpRequest]): Unit = {
      xhrTry match {
        case Failure(e) => println("JSON을 읽어들이는 동안 오류가 발생하였습니다.")
        case Success(xhr) => {
          val data = upickle.default.read[Seq[Item]](xhr.responseText)
          $.modState(_.copy(items = data.toList)).runNow()
        }
      }
    }
    def render(s: State): VdomElement = {
      if (s.items.isEmpty) {
        <.div(^.className:="App")("읽어들이는중입니다.")
      }
      else {
        val options = s.items.map( item =>
          <.option(^.value:=item.price, ^.key:=item.name)(item.name)
        ).toTagMod
        <.div(^.className:="App")("과일: ",<.select(options))
      }
    }
  }

  val Component = ScalaComponent.builder[Unit]("SAgent")
    .initialState(State.init)
    .renderBackend[Backend]
    .componentWillMount(_.backend.componentWillMount)
    .build
}
