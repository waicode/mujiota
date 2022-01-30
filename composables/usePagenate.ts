import { Article } from '~/store'

export default (
  articles: Article[],
  pageSize: number,
  currentPage?: number
) => {
  const targetPage: number = currentPage === undefined ? 1 : currentPage
  return articles.slice(pageSize * (targetPage - 1), pageSize * targetPage)
}
