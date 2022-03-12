<template>
  <div>
    <!-- アーカイブページへリダイレクト -->
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import useRedirectArchivePage from '~/composables/useRedirectArchivePage'
import { isYyyyMm } from '~/composables/util'

export default defineComponent({
  name: 'MujiotaArchivesRedirectPage',
  validate({ params }) {
    return isYyyyMm(params.yyyy, params.mm)
  },
  setup() {
    const context = useContext()
    useAsync(async () => useRedirectArchivePage(context as unknown as Context))
  },
})
</script>
