// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Ref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## 関連記事リスト取得
 *
 * 現状はカテゴリーが同一の記事を関連記事として表示している。
 *
 * @param category カテゴリー名称
 * @param id 記事ID
 * @returns 関連記事リスト
 */
export default async (
  category: Ref<string> | string,
  id: Ref<number> | number,
  { $content }: Context
): Promise<Article[]> => {
  const relatedArticles = await $content('articles', { deep: true })
    .where({
      category,
      id: { $ne: id }, // 表示している記事は除く
    })
    .fetch<Article>()

  return relatedArticles as Article[]
}
