import { useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default async (): Promise<Article[]> => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .only([
      'id',
      'slug',
      'title',
      'tags',
      'description',
      'imageFormat',
      'createdAt',
      'updatedAt',
    ])
    .sortBy('createdAt', 'desc')
    .fetch<Article>()
  return articlesData as Article[]
}
