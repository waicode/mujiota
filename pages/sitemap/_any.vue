<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MujiotaSitemapRedirectPage',
  setup() {
    const { redirect } = useContext()
    useAsync(async () => redirect(301, `/sitemap`))
  },
})
</script>
