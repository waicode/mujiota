// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { reactive, Ref } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## ページURL情報の取得
 *
 * @param article 記事情報
 * @param context
 */
export default (article: Ref<Article | undefined>, { $config }: Context) =>
  reactive({
    pageUrl: article.value
      ? `${$config.baseUrl}/${article.value.id}/${article.value.slug}`
      : '',
    imageUrl: article.value
      ? $config.baseUrl +
        // eslint-disable-next-line import/no-dynamic-require, global-require
        require(`~/assets/images/eyecatch/${article.value.id}/${article.value.slug}.${article.value.imageFormat}`)
      : '',
  })
