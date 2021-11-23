<template>
  <div class="container">
    <div v-if="posts" class="post-list">
      <div v-for="(article, index) in posts" :key="article.id">
        <AppArticle :article="article" />
        <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
      </div>
    </div>
    <div v-show="articles.length > pageSize" class="post-pagination">
      <AppPagenation
        :articles="articles"
        :page-size="pageSize"
        @change-page="displayPage"
      />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api'
import useHeaderMeta from '@/composables/useHeaderMeta'
import usePagenate from '~/composables/usePagenate'
import useFetchArchives from '~/composables/useFetchArchives'

export default defineComponent({
  name: 'MujiotaArchivePage',
  setup() {
    const { $config, store, params, app, error } = useContext()
    const { title, meta } = useMeta()

    const pageSize = $config.pageSize

    const year = params.value.yyyy
    const month = params.value.mm
    const monthStr = String(Number(month)) // ゼロサプレス
    const archivesTitle = `${year}年${monthStr}月の記事一覧`
    const description = `${year}年${monthStr}月に投稿された記事の一覧です。`
    const pageUrl = `${$config.baseUrl}/date/${year}/${month}`

    const articles = ref([])
    const posts = ref([])

    const displayPage = (targetPosts) => {
      posts.value = targetPosts
    }

    const { fetch } = useFetch(async () => {
      // 対象年月の記事一覧を取得
      articles.value = await useFetchArchives(year, month)
      if (articles.value.length < 1) error({ statusCode: 404 })

      // ページネーションの初期表示
      posts.value = usePagenate(articles.value, pageSize)

      // メタ情報
      const metaData = app.$getMeta(archivesTitle, description, pageUrl, null)
      title.value = archivesTitle
      meta.value = useHeaderMeta(metaData).meta

      // 現在の記事情報をリセット
      store.commit('page/setArticle', { article: {} })
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
