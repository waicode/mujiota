<template>
  <div class="container">
    <div class="post-list">
      <div v-for="(article, index) in displayPosts" :key="article.id">
        <AppArticle :article="article" />
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

<script lang="ts">
import Meta from '~/mixins/meta'

export default {
  name: 'MujiotaIndexPage',
  mixins: [Meta],
  async asyncData({ $content, store, app }) {
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

    // 現在の記事情報をリセット
    store.commit('page/setArticle', { article: {} })

    // メタ情報
    const meta = app.$getMeta()
    meta.title = 'mujiota.com'
    meta.description =
      'MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。'
    meta.pageUrl = 'https://mujiota.com'
    meta.ogType = 'blog'

    return {
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
<style lang="scss" scoped>
.container {
  .post-list {
    margin-bottom: $scale64;
    @media (max-width: $tablet) {
      margin-bottom: $scale12;
    }
  }
  .post-pagination {
    margin-bottom: $scale4;
    @media (max-width: $tablet) {
      margin-bottom: $scale48;
    }
  }
}
</style>
