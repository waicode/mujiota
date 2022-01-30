import { useContext } from '@nuxtjs/composition-api'

export default async (tagName: string) => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .where({
      tags: { $containsAny: [tagName] },
    })
    .sortBy('createdAt', 'desc')
    .fetch()
  return articlesData
}
