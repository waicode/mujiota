import { Article } from '~/store'

/**
 * ## ページネーション
 *
 * ページサイズと表示ページに従いページに表示する記事一覧を返却する。
 *
 * @param articles 記事のリスト
 * @param pageSize ページサイズ
 * @param currentPage 表示するページ（指定なしの場合は1）
 * @returns 検索結果の記事データ配列のPromise
 */
export default (
  articles: Article[],
  pageSize: number,
  currentPage: number = 1
) => articles.slice(pageSize * (currentPage - 1), pageSize * currentPage)
