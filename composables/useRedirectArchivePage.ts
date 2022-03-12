// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## アーカイブページへのリダイレクト
 *
 * @param context
 */
export default async ({ $content, params, redirect, error }: Context) => {
  try {
    let articles = (await $content('articles', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch<Article>()) as Article[]

    // eslint-disable-next-line no-useless-escape
    const pattern = new RegExp(`^${unref(params).yyyy}\-${unref(params).mm}`)
    articles = articles.filter((data) => data.createdAt.match(pattern))

    if (articles.length > 0) {
      redirect(301, `/date/${unref(params).yyyy}/${unref(params).mm}`)
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
