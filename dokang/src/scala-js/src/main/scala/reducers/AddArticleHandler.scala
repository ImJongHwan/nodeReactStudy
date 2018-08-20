package reducers

import actions.{AddArticle, Article}
import diode.{ActionHandler, ActionResult, ModelRW}

class AddArticleHandler[M](modelRW: ModelRW[M, List[Article]]) extends ActionHandler(modelRW) {
  override protected def handle: PartialFunction[Any, ActionResult[M]] = {
    case AddArticle(article) => updated(value :+ article)
  }
}
