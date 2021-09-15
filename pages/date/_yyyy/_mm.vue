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
export default {
  async asyncData({ $content, params, error }) {
    const year = params.yyyy
    const month = params.mm

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
    return {
      articles,
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
