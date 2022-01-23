<script>
export default {
  async asyncData({ $content, params, app, redirect, error }) {
    const tagName = app.$getTagName(params.slug)
    let articles = []
    try {
      articles = await $content('articles', { deep: true })
        .where({
          tags: { $containsAny: [tagName] },
        })
        .sortBy('createdAt', 'desc')
        .fetch()
      if (articles.length > 0) {
        redirect(301, `/tag/${params.slug}`)
      } else {
        error({
          statusCode: 404,
        })
      }
    } catch {
      error({
        statusCode: 404,
      })
    }
  },
}
</script>
