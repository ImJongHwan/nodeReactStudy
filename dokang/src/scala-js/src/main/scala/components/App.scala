package components

import actions.AppModel
import diode.react.ModelProxy
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import store.AppCircuit

object App {

  final class Backend($: BackendScope[Unit, Unit]) {
    def render(): VdomElement = {
      <.div(^.className := "row mt-5")(
        <.div(^.className := "col-md-4 offset-md-1")(
          <.h2("Articles"),
          TitleList()
        ),
        <.div(^.className := "col-md-4 offset-md-1")(
          <.h2("Add a new article"),
          Form()
        )
      )
    }
  }

  val Component = ScalaComponent.builder[Unit]("App")
    .renderBackend[Backend]
    .build
  def apply() = {
    Component()
  }
}

