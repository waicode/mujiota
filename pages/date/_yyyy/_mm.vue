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
}
</script>
