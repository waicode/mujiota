<template>
  <div class="container">
    <div class="post-list">
      <div v-for="(article, index) in articles" :key="article.id">
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
        :per-page="10"
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
  async asyncData({ $content }) {
    const articles = await $content('articles', { deep: true })
      .only([
        'id',
        'slug',
        'title',
        'tags',
        'description',
        'imageFormat',
        'createdAt',
        'updatedAt',
      ])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  data() {
    return {
      currentPage: 1,
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  .post-list {
    margin-bottom: 64px;
    @media (max-width: $tablet) {
      margin-bottom: 12px;
    }
  }
  .post-pagination {
    margin-bottom: 4px;
    @media (max-width: $tablet) {
      margin-bottom: 48px;
    }
  }
}
</style>
