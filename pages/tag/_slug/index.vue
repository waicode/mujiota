<template>
  <div class="container">
    <div class="post-list">
      <div v-for="(article, index) in articles" :key="article.id">
        <Article :article="article" />
        <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
      </div>
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
}
</script>
