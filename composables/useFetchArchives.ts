// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Ref, unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## アーカイブページ用の記事リスト取得
 *
 * @param year 年
 * @param month 月
 * @returns アーカイブページ用の記事リスト
 */
export default async (
  year: Ref<string> | string,
  month: Ref<string> | string,
  { $content }: Context
): Promise<Article[]> => {
  const articlesData = await $content('articles', { deep: true })
    .sortBy('createdAt', 'desc')
    .fetch<Article>()
  const pattern = new RegExp(`^${unref(year)}-${unref(month)}`)
  return articlesData.filter((data: Article) => data.createdAt.match(pattern))
}
