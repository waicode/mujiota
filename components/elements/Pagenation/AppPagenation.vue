<template>
  <b-pagination
    v-model="currentPage"
    class="AppPagenation"
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
<script lang="ts">
import { defineComponent, ref, toRefs, PropType } from '@nuxtjs/composition-api'
import usePagenate from '~/composables/usePagenate'
import { Article } from '~/store'

export default defineComponent({
  name: 'AppPagenation',
  props: {
    articles: {
      type: Array as PropType<Array<Article>>,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
  },
  emits: ['change-page'],
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
