<script>
export default {
  async asyncData({ $content, params, redirect }) {
    let articles = []
    try {
      articles = await $content('articles', params.id, { deep: true }).fetch()
      if (articles.length === 1) {
        const article = articles[0]
        redirect(301, `/${article.id}/${article.slug}`)
      } else {
        redirect(301, `/`)
      }
    } catch {
      redirect(301, `/`)
    }
  },
}
</script>
