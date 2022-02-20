import { Ref, unref, useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default async (tagName: Ref<string> | string): Promise<Article[]> => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .where({
      tags: { $containsAny: [unref(tagName)] },
    })
    .sortBy('createdAt', 'desc')
    .fetch<Article>()
  return articlesData as Article[]
}
