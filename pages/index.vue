<template>
  <div class="MujiotaIndexPage">
    <div v-if="posts" class="MujiotaIndexPage__PostList">
      <div v-for="(article, index) in posts" :key="article.id">
        <AppArticle :article="article" />
        <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
      </div>
    </div>
    <div
      v-show="articles.length > pageSize"
      class="MujiotaIndexPage__PostPagination"
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
import useFetchPosts from '~/composables/useFetchPosts'
import { Article } from '~/store'
import { DEFAULT_OG_IMAGE_URL } from '~/plugins/meta'

/**
 * ## トップページ
 */
export default defineComponent({
  name: 'MujiotaIndexPage',
  setup() {
    const context = useContext()
    const { $config, app, error } = context
    const { title, meta } = useMeta()

    const { pageSize } = $config

    const articles = ref([] as Article[])
    const posts = ref([] as Article[])

    const displayPage = (targetPosts: Article[]) => {
      posts.value = targetPosts
    }

    const { fetch } = useFetch(async () => {
      articles.value = await useFetchPosts(context as unknown as Context)
      if (articles.value.length < 1) error({ statusCode: 404 })

      // ページネーションの初期表示
      posts.value = usePagenate(articles.value, pageSize)

      // メタ情報
      const TOP_TITLE = 'mujiota.com'
      const TOP_DESCRIPTION =
        'MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。'
      const TOP_URL = $config.baseURL
      const metaData = app.$getMeta(
        TOP_TITLE,
        TOP_DESCRIPTION,
        TOP_URL,
        DEFAULT_OG_IMAGE_URL
      )
      title.value = TOP_TITLE
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
.MujiotaIndexPage {
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
