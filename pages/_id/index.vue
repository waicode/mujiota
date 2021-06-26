<template>
  <div>id</div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    let article = ''
    try {
      article = await $content('articles', params.id).fetch()
      // TODO:slugページへリダイレクト
    } catch {
      // TODO:無い場合はリダイレクト
    }
    return { article }
  },
}
</script>
