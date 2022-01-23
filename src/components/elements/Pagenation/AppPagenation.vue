<template>
  <b-pagination
    v-model="currentPage"
    :total="articles.length"
    :range-before="1"
    :range-after="1"
    size="is-large"
    :per-page="pageSize"
    icon-prev="chevron-left"
    icon-next="chevron-right"
    @change="changePage"
  >
  </b-pagination>
</template>
<script>
import { defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import usePagenate from '~/composables/usePagenate'
export default defineComponent({
  name: 'AppPagenation',
  props: {
    articles: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const currentPage = ref(1)

    const { pageSize } = toRefs(props)

    const changePage = () => {
      const targetPosts = usePagenate(
        props.articles,
        pageSize.value,
        currentPage.value
      )
      context.emit('change-page', targetPosts)
    }

    return {
      currentPage,
      changePage,
    }
  },
})
</script>
