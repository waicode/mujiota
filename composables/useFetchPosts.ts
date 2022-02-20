// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Article } from '~/store'

/**
 * ## 全記事リストの取得
 *
 * @returns 全記事のリスト
 */
export default async ({ $content }: Context): Promise<Article[]> => {
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
