<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <!-- <img :src="article.img" :alt="article.alt" /> -->
    <p>
      Article last updated:
      {{ $dateFns.format(article.updatedAt, 'yyyy-MM-dd') }}
    </p>

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
