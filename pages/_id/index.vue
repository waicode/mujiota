<template>
  <div>
    <!-- 個別記事ページへリダイレクト -->
  </div>
</template>
<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import { Article } from '~/store'

export default defineComponent({
  name: 'MujiotaSlugRedirectPage',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  setup() {
    const { $content, params, redirect, error } = useContext()
    useAsync(async () => {
      try {
        const articles = await $content('articles', params.value.id, {
          deep: true,
        }).fetch<Article>()
        if (articles && articles.length === 1) {
          const article = (articles as Article[])[0]
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
    })
  },
})
</script>
