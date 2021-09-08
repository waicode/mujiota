<template>
  <div class="container">
    <div class="post-list">
      <template v-for="categorisedAirticle in categorisedAirticles">
        <h2 :key="categorisedAirticle.category">
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
export default {
  async asyncData({ $content }) {
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
    return {
      articles,
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
        this.articles.forEach((article) => {
          if (category === article.category) {
            articles.push(article)
          }
        })
        categorisedAirticles.push({ category, articles })
      })
      console.log(categorisedAirticles)
      return categorisedAirticles
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
      padding: 0.32rem;
      margin-left: 0.2rem;
      color: #726c6c;
      text-decoration: none;
    }
  }
}
</style>
