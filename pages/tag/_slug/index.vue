<template>
  <div class="container">
    <div v-if="posts" class="post-list">
      <div v-for="(article, index) in posts" :key="article.id">
        <Article :article="article" />
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
import useFetchTagPages from '~/composables/useFetchTagPages'

export default defineComponent({
  name: 'MujiotaTagPage',
  setup() {
    const { $config, store, params, app, error } = useContext()
    const { title, meta } = useMeta()

    const pageSize = $config.pageSize

    const tagName = app.$getTagName(params.value.slug)
    const pageUrl = `${$config.baseUrl}/tag/${params.value.slug}/`
    const tagPageTitle = `${tagName}の記事一覧`
    const description = `「${tagName}」タグが付いた記事の一覧です。`

    const articles = ref([])
    const posts = ref([])

    const displayPage = (targetPosts) => {
      posts.value = targetPosts
    }

    const { fetch } = useFetch(async () => {
      // 対象タグの記事一覧を取得
      articles.value = await useFetchTagPages(tagName)
      if (articles.length < 1) error({ statusCode: 404 })

      // ページネーションの初期表示
      posts.value = usePagenate(articles.value, pageSize)

      // メタ情報
      const metaData = app.$getMeta(tagPageTitle, description, pageUrl, null)
      title.value = tagPageTitle
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
