<template>
  <div>
    <!-- TOPページへリダイレクト -->
  </div>
</template>
<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MujiotaIndexPhpRedirectPage',
  setup() {
    const { redirect } = useContext()
    useAsync(() => redirect(301, `/`))
  },
})
</script>
