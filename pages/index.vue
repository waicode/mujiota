<template>
  <div class="container">
    <div class="post-list">
      <div v-for="article in articles" :key="article.id">
        <Article :article="article" />
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
  async asyncData({ $content }) {
    const articles = await $content('articles', { deep: true })
      .only([
        'id',
        'slug',
        'title',
        'tags',
        'description',
        'imageFormat',
        'publishedAt',
        'updatedAt',
      ])
      .fetch()
    return {
      articles,
    }
  },
}
</script>
