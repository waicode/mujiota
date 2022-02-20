import { Ref, unref, useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default async (
  year: Ref<string> | string,
  month: Ref<string> | string
): Promise<Article[]> => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .sortBy('createdAt', 'desc')
    .fetch<Article>()
  const pattern = new RegExp(`^${unref(year)}-${unref(month)}`)
  return articlesData.filter((data: Article) => data.createdAt.match(pattern))
}
