<template>
  <div class="container">
    <div class="post-list">
      <Article
        :title="'完全無欠コーヒーを3年半飲み続けて確信した効果とおすすめの作り方'"
        :description="'朝は大の苦手だったのに、完全無欠コーヒーを飲むようになってからは午前中から集中して仕事に取り組めるように。完全無欠コーヒーの効果や作り方を、長年の経験にもとづいて誰よりも詳しく書いたつもりです。'"
        :date-published="new Date(2021, 6, 24)"
        :date-updated="new Date(2021, 6, 24)"
        :post-id="'1372'"
        :post-slug="'bulletproof-coffee'"
        :img-format="'jpeg'"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article'
export default {
  components: {
    Article,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
