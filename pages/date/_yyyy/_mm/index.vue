<template>
  <div class="container">
    <div v-if="displayPosts" class="post-list">
      <div v-for="(article, index) in displayPosts" :key="article.id">
        <Article :article="article" />
        <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
      </div>
    </div>
    <div v-show="articles.length > pageSize" class="post-pagination">
      <b-pagination
        v-model="currentPage"
        :total="articles.length"
        :range-before="1"
        :range-after="1"
        size="is-large"
        :per-page="pageSize"
        icon-prev="chevron-left"
        icon-next="chevron-right"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  useContext,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api'
import useHeaderMeta from '@/composables/useHeaderMeta'

export default defineComponent({
  name: 'MujiotaArchivePage',
  setup() {
    const { $content, $config, store, params, app, error } = useContext()

    const currentPage = ref(1)
    const pageSize = ref(5)

    const year = params.value.yyyy
    const month = params.value.mm
    const monthStr = String(Number(month)) // ゼロサプレス

    const archivesTitle = `${year}年${monthStr}月の記事一覧`
    const description = `${year}年${monthStr}月に投稿された記事の一覧です。`
    const pageUrl = `${$config.baseURL}/date/${year}/${month}`

    const { title, meta } = useMeta()

    const articles = ref([])

    // TODO: composableへ
    const displayPosts = computed(() => {
      // TODO: 記事の高さを固定にしてチラツキをなくす
      if (articles.value) {
        return articles.value.slice(
          pageSize.value * (currentPage.value - 1),
          pageSize.value * currentPage.value
        )
      } else {
        return []
      }
    })

    // TODO: composableへ
    const { fetch } = useFetch(async () => {
      const articlesData = await $content('articles', { deep: true })
        .sortBy('createdAt', 'desc')
        .fetch()
      // eslint-disable-next-line no-useless-escape
      const pattern = new RegExp('^' + year + '\-' + month)
      articles.value = articlesData.filter((data) =>
        data.createdAt.match(pattern)
      )

      if (articles.value.length < 1) {
        error({
          statusCode: 404,
        })
      }

      // メタ情報
      const metaData = app.$getMeta(archivesTitle, description, pageUrl, null)
      title.value = archivesTitle
      meta.value = useHeaderMeta(metaData).meta

      // 現在の記事情報をリセット
      store.commit('page/setArticle', { article: {} })
    })

    fetch()

    return {
      currentPage,
      pageSize,
      displayPosts,
      articles,
    }
  },
  head: {},
})
</script>
