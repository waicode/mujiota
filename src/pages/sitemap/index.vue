<template>
  <div class="container">
    <div class="post-list">
      <template v-for="categorisedAirticle in categorisedAirticles">
        <h2 :key="categorisedAirticle.category">
          {{ categorisedAirticle.icon }}
          {{ categorisedAirticle.category }}
        </h2>
        <ul :key="categorisedAirticle.category">
          <li v-for="article in categorisedAirticle.articles" :key="article.id">
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
    categorisedAirticles() {
      // [{category: "aaa", articles:[{...article1}, {...article2}, ...]}]
      const categorisedAirticles = []
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
        categorisedAirticles.push({ category, articles, icon })
      })
      return categorisedAirticles
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
<style lang="scss" scoped>
h2 {
  margin-bottom: 12px;
  font-size: 1.3125rem;
  font-weight: bold;
}
ul {
  margin-bottom: 28px;

  li {
    font-size: 1rem;
    a {
      display: inline-block;
      padding: 0.16rem;
      line-height: 1.6rem;
      margin-left: 0.2rem;
      font-size: 0.8175rem;
      font-weight: bold;
      color: #726c6c;
      text-decoration: none;
    }
  }
}
</style>
