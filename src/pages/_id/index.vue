<script>
export default {
  name: 'MujiotaSlugRedirectPage',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $content, params, redirect, error }) {
    let articles = []
    try {
      articles = await $content('articles', params.id, { deep: true }).fetch()
      if (articles.length === 1) {
        const article = articles[0]
        redirect(301, `/${article.id}/${article.slug}`)
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
