package actions

import java.util.UUID

case class AppModel(articles: List[Article])

case class Article(id: Article.Id, title: String)
object Article {
  type Id = String
  def randomId: Id = UUID.randomUUID().toString
}
