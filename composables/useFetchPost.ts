import { useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default async (id: string): Promise<Article> => {
  const { $content } = useContext()

  const articleDataArray = await $content('articles', id)
    .fetch<Article>()
    .catch()

  // 配列から1件取り出す
  const articles = articleDataArray as Article[]
  return articles[0]
}
