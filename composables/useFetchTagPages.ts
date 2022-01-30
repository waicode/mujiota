import { useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default async (tagName: string): Promise<Article[]> => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .where({
      tags: { $containsAny: [tagName] },
    })
    .sortBy('createdAt', 'desc')
    .fetch<Article>()
  return articlesData as Article[]
}
