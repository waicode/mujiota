// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Ref, unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## 記事の取得
 *
 * @param id 記事ID
 * @returns 記事情報
 */
export default async (
  id: Ref<string> | string,
  { $content }: Context
): Promise<Article> => {
  const articleDataArray = await $content(
    'articles',
    unref(id)
  ).fetch<Article>()

  // 配列から1件取り出す
  const articles = articleDataArray as Article[]
  return articles[0]
}
