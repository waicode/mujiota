<script>
export default {
  // validate({ params }) {
  //   return /^\d{4}$/.test(params.yyyy) && /^\d{2}$/.test(params.mm)
  // },
  async asyncData({ $content, params, redirect, error }) {
    let articles = []
    try {
      articles = await $content('articles', { deep: true })
        .sortBy('createdAt', 'desc')
        .fetch()
      // eslint-disable-next-line no-useless-escape
      const pattern = new RegExp('^' + params.yyyy + '\-' + params.mm)
      articles = articles.filter((data) => data.createdAt.match(pattern))

      if (articles.length > 0) {
        redirect(301, `/date/${params.yyyy}/${params.mm}`)
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
