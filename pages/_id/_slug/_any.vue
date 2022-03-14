<template>
  <div>
    <!-- 個別記事ページへリダイレクト -->
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import useRedirectPost from '~/composables/useRedirectPost'
import { isNumerical } from '~/utils/util'

export default defineComponent({
  name: 'MujiotaSlugRedirectPage',
  validate({ params }) {
    return isNumerical(params.id)
  },
  setup() {
    const context = useContext()
    useAsync(async () => useRedirectPost(context as unknown as Context))
  },
})
</script>
