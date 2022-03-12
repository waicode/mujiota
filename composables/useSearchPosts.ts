// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Ref, unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## 記事の検索
 *
 * 検索文字列にヒットした記事の一覧を取得する。
 * `$content`の`search(query)`で一部取得できていない記事があるためfilterと組み合わせて検索している。
 *
 * @param searchText 検索文字列のRef
 * @param NuxtのContext
 * @returns 検索結果の記事データ配列のPromise
 */
export default async (
  searchText: Ref<string>,
  { app, $content }: Context
): Promise<Article[]> => {
  const articlesFromContent = (await $content('articles', { deep: true })
    .limit(app.$accessor.articles.length)
    .search(unref(searchText))
    .sortBy('createdAt', 'desc')
    .fetch<Article>()) as Article[]
  // TODO: 本来はcontentだけで検索できるようにしたい
  const articlesFromState = app.$accessor.articles.filter(
    (data) =>
      data.title.includes(searchText.value) ||
      data.description.includes(searchText.value)
  )
  // 重複を外す
  const searchedArticles = articlesFromContent
    .concat(articlesFromState)
    .filter(
      (element: Article, index: number, self: Article[]) =>
        self.findIndex(
          (e) => e.id === element.id && e.slug === element.slug
        ) === index
    ) as Article[]
  return searchedArticles
}
