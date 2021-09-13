<template>
  <div class="container">
    <div class="post-list">
      <div v-for="(article, index) in displayPosts" :key="article.id">
        <Article :article="article" />
        <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
      </div>
    </div>
    <div class="post-pagination">
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
import Article from '@/components/Article'
export default {
  components: {
    Article,
  },
  async asyncData({ $content, params, app, error }) {
    const tagName = app.$getTagName(params.slug)
    let articles = []
    try {
      articles = await $content('articles', { deep: true })
        .where({
          tags: { $containsAny: [tagName] },
        })
        .sortBy('createdAt', 'desc')
        .fetch()
      if (articles.length < 1) {
        error({
          statusCode: 404,
        })
      }
      return {
        articles,
      }
    } catch {
      error({
        statusCode: 404,
      })
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
