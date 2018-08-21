package store

import actions.AppModel
import diode.Circuit
import diode.react.ReactConnector
import reducers.AddArticleHandler

object AppCircuit extends Circuit[AppModel] with ReactConnector[AppModel] {
  override protected def initialModel: AppModel = AppModel(List())

  override protected def actionHandler: AppCircuit.HandlerFunction = {
    composeHandlers(new AddArticleHandler(zoomTo(_.articles)))
  }
}
