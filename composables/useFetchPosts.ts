// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Article } from '~/store'

/**
 * ## 全記事リストの取得
 *
 * @returns 全記事のリスト
 */
export default async ({ $content }: Context): Promise<Article[]> => {
  const articles = (await $content('articles', { deep: true })
    .only([
      'id',
      'slug',
      'title',
      'tags',
      'category',
      'description',
      'imageFormat',
      'createdAt',
      'updatedAt',
    ])
    .sortBy('createdAt', 'desc')
    .fetch<Article>()) as Article[]
  return articles
}
