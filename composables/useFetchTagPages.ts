// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Ref, unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## タグページ用の記事リスト取得
 *
 * @param tagName タグ名称
 * @param $content
 * @returns タグページ用の記事リスト
 */
export default async (
  tagName: Ref<string> | string,
  { $content }: Context
): Promise<Article[]> => {
  const articlesData = await $content('articles', { deep: true })
    .where({
      tags: { $containsAny: [unref(tagName)] },
    })
    .sortBy('createdAt', 'desc')
    .fetch<Article>()
  return articlesData as Article[]
}
