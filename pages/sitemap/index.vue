<template>
  <div class="container">
    <div class="post-list">
      <template v-for="categorisedArticle in categorisedArticles">
        <h2 :key="categorisedArticle.category">
          {{ categorisedArticle.icon }}
          {{ categorisedArticle.category }}
        </h2>
        <ul :key="categorisedArticle.category">
          <li v-for="article in categorisedArticle.articles" :key="article.id">
            <nuxt-link :to="`/${article.id}/${article.slug}/`">{{
              article.title
            }}</nuxt-link>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import Meta from '~/mixins/meta'

export default {
  name: 'MujiotaSitemapPage',
  mixins: [Meta],
  async asyncData({ $config, $content, store, app }) {
    const pageUrl = `${$config.baseURL}/sitemap`
    const articles = await $content('articles', { deep: true })
      .only([
        'id',
        'slug',
        'title',
        'category',
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
    meta.title = 'サイトマップ'
    meta.description = '全記事の一覧です。'
    meta.pageUrl = pageUrl
    meta.ogType = 'blog'

    return {
      articles,
      pageUrl,
      meta,
    }
  },
  computed: {
    categorisedArticles() {
      // [{category: "aaa", articles:[{...article1}, {...article2}, ...]}]
      const categorisedArticles = []
      const categories = Array.from(
        new Set(this.articles.map((article) => article.category))
      )
      categories.forEach((category) => {
        const articles = []
        let hitArticle = {}
        this.articles.forEach((article) => {
          if (category === article.category) {
            articles.push(article)
            hitArticle = article
          }
        })
        const tagSlug = this.$getTagSlug(hitArticle.category)
        const icon = this.$getTagIcon(tagSlug)
        categorisedArticles.push({ category, articles, icon })
      })
      return categorisedArticles
    },
  },
  methods: {
    categoryIcon(tagName) {
      const tagSlug = this.$getTagSlug(tagName)
      return this.$getTagIcon(tagSlug)
    },
  },
}
</script>
<style lang="scss">
h2 {
  margin-bottom: $scale12;
  font-size: $font-size-131rem;
  font-weight: $font-weight-700;
}
ul {
  margin-bottom: $scale28;

  li {
    font-size: $font-size-100rem;
    a {
      display: inline-block;
      padding: $scale4;
      margin-left: $scale8;
      font-size: $font-size-081rem;
      font-weight: $font-weight-700;
      line-height: $font-size-160rem;
      color: $sitemap-link-color;
      text-decoration: none;
    }
  }
}
</style>
