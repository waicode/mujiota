import { useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default async (year: string, month: string) => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .sortBy('createdAt', 'desc')
    .fetch()
  const pattern = new RegExp(`^${year}-${month}`)
  return articlesData.filter((data: Article) => data.createdAt.match(pattern))
}
