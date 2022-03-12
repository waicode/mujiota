// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { Ref, ref, unref } from '@nuxtjs/composition-api'
import useFetchPost from '~/composables/useFetchPost'
import useFetchRelatedPosts from '~/composables/useFetchRelatedPosts'
import { Article } from '~/store'

export type UseFetchIdSlugPageReturn = {
  article: Ref<Article | undefined>
  relatedArticles: Ref<Article[] | undefined>
  pageUrl: Ref<string>
  imageUrl: Ref<string>
}

// TODO: のちほど利用できるよう修正

export const useFetchIdSlugPage = async (
  context: Context
): Promise<UseFetchIdSlugPageReturn> => {
  const article = ref<Article>()
  const relatedArticles = ref<Article[]>()
  const pageUrl = ref('')
  const imageUrl = ref('')

  const { $config, params, app, error } = context

  try {
    // 記事ページ情報を取得
    article.value = await useFetchPost(
      unref(params).id,
      context as unknown as Context
    )

    if (!article.value) {
      // 見つからない場合はNOTFOUND
      error({
        statusCode: 404,
      })
    }

    pageUrl.value = `${$config.baseUrl}/${article.value.id}/${article.value.slug}`
    imageUrl.value =
      $config.baseUrl +
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`~/assets/images/eyecatch/${article.value.id}/${article.value.slug}.${article.value.imageFormat}`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }

  if (article.value) {
    if (article.value.category) {
      try {
        // 関連記事の取得
        relatedArticles.value = await useFetchRelatedPosts(
          article.value.category,
          article.value.id,
          context as unknown as Context
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }

    // 現在のページ情報をストアへ格納
    app.$accessor.setArticle({ article: article.value })
  }

  return {
    article,
    relatedArticles,
    pageUrl,
    imageUrl,
  }
}
