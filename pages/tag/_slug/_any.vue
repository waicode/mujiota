<template>
  <div>
    <!-- タグページへリダイレクト -->
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import useRedirectTagPage from '~/composables/useRedirectTagPage'

export default defineComponent({
  name: 'MujiotaTagRedirectPage',
  setup() {
    const context = useContext()
    useAsync(async () => useRedirectTagPage(context as unknown as Context))
  },
})
</script>
