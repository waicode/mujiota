<template>
  <div class="container">
    <div class="post-list">
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
import Meta from '~/mixins/meta'

export default {
  mixins: [Meta],
  async asyncData({ $content, store, params, app, error }) {
    const year = params.yyyy
    const month = params.mm
    const pageUrl = `${process.env.BASE_URL}/date/${year}/${month}`

    let articles = []

    articles = await $content('articles', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()
    // eslint-disable-next-line no-useless-escape
    const pattern = new RegExp('^' + year + '\-' + month)
    articles = articles.filter((data) => data.createdAt.match(pattern))

    if (articles.length < 1) {
      error({
        statusCode: 404,
      })
    }

    // 現在の記事情報をリセット
    store.commit('page/setArticle', { article: {} })

    // メタ情報
    const meta = app.$getMeta()
    const monthStr = String(Number(month)) // ゼロサプレス
    meta.title = `${year}年${monthStr}月の記事一覧`
    meta.description = `${year}年${monthStr}月に投稿された記事の一覧です。`
    meta.pageUrl = pageUrl
    meta.ogType = 'blog'

    return {
      year,
      month,
      pageUrl,
      articles,
      meta,
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
    }
  },
  computed: {
    displayPosts() {
      // TODO: 記事の高さを固定にしてチラツキをなくす
      return this.articles.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      )
    },
  },
}
</script>
