<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <!-- <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->

    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('bulletproof-coffee', params.slug).fetch()

    return { article }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
