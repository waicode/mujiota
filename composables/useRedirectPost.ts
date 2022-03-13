// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## 個別記事ページへのリダイレクト
 *
 * @param context
 */
export default async ({ $content, params, redirect, error }: Context) => {
  try {
    const articles = (await $content('articles', unref(params).id, {
      deep: true,
    })
      .where({
        id: Number(unref(params).id), // idの文字列が含まれるフォルダが複数ヒットするため条件にも指定
      })
      .fetch<Article>()) as Article[]

    if (articles && articles.length === 1) {
      const article = articles[0]
      redirect(301, `/${article.id}/${article.slug}/`)
    } else {
      error({
        statusCode: 404,
      })
    }
  } catch {
    error({
      statusCode: 404,
    })
  }
}
