// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { unref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## タグページへのリダイレクト
 *
 * @param context
 */
export default async ({ $content, params, app, redirect, error }: Context) => {
  const tagName = app.$getTagName(unref(params).slug)
  try {
    const articles = (await $content('articles', { deep: true })
      .where({
        tags: { $containsAny: [tagName] },
      })
      .sortBy('createdAt', 'desc')
      .fetch<Article>()) as Article[]
    if (articles.length > 0) {
      redirect(301, `/tag/${unref(params).slug}`)
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
