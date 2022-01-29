import { Article } from '~/store'

export const getTitle = (postId: number, articles: Array<Article>) => {
  const hit = articles.find((data) => data.id === Number(postId))
  return hit ? hit.title : ''
}

export default (_: unknown, inject: any) => {
  inject('getTitle', getTitle)
}
