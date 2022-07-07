<template>
  <div class="MujiotaTagPage">
    <div v-if="posts" class="MujiotaTagPage__PostList">
      <div v-for="(article, index) in posts" :key="article.id">
        <AppArticle :article="article" />
        <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
      </div>
    </div>
    <div
      v-show="articles.length > pageSize"
      class="MujiotaTagPage__PostPagination"
    >
      <AppPagenation
        :articles="articles"
        :page-size="pageSize"
        @change-page="displayPage"
      />
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'

import useHeaderMeta from '~/composables/useHeaderMeta'
import usePagenate from '~/composables/usePagenate'
import useFetchTagPages from '~/composables/useFetchTagPages'
import { Article } from '~/store'
import { getDefaultOgImageUrl } from '~/plugins/meta'

/**
 * ## タグ用一覧ページ
 */
export default defineComponent({
  name: 'MujiotaTagPage',
  setup() {
    const context = useContext()
    const { $config, params, app, error } = context
    const { title, meta } = useMeta()

    const { baseUrl, pageSize } = $config

    const tagName = app.$getTagName(params.value.slug)
    const pageUrl = `${baseUrl}/tag/${params.value.slug}/`
    const tagPageTitle = `${tagName}の記事一覧`
    const description = `「${tagName}」タグが付いた記事の一覧です。`

    const articles = ref([] as Article[])
    const posts = ref([] as Article[])

    const displayPage = (targetPosts: Article[]) => {
      posts.value = targetPosts
    }

    const { fetch } = useFetch(async () => {
      // 対象タグの記事一覧を取得
      articles.value = await useFetchTagPages(
        tagName,
        context as unknown as Context
      )
      if (articles.value.length < 1) error({ statusCode: 404 })

      // ページネーションの初期表示
      posts.value = usePagenate(articles.value, pageSize)

      // メタ情報
      const metaData = app.$getMeta(
        tagPageTitle,
        description,
        pageUrl,
        getDefaultOgImageUrl(baseUrl)
      )
      title.value = tagPageTitle
      meta.value = useHeaderMeta(metaData).meta

      // 現在の記事情報をリセット
      app.$accessor.setArticle({ article: {} })
    })

    fetch()

    return {
      articles,
      posts,
      pageSize,
      displayPage,
    }
  },
  head: {},
})
</script>
<style lang="scss">
.MujiotaTagPage {
  &__PostList {
    margin-bottom: $scale64;
    @media (max-width: $tablet) {
      margin-bottom: $scale12;
    }
  }
  &__PostPagination {
    margin-bottom: $scale4;
    @media (max-width: $tablet) {
      margin-bottom: $scale48;
    }
  }
}
</style>
