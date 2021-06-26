<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
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
    let article = ''
    try {
      article = await $content('articles', params.id, params.slug).fetch()
    } catch {
      // TODO:無い場合はリダイレクト
    }
    return { article }
  },
}
</script>
