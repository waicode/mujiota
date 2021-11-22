export default (articles, pageSize, currentPage) => {
  if (currentPage === null || currentPage === undefined) currentPage = 1
  return articles.slice(pageSize * (currentPage - 1), pageSize * currentPage)
}
