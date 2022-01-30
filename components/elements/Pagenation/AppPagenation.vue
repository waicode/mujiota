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

/**
 * ## ページネーション
 *
 * `b-pagination`のラッパーコンポーネント。
 * 記事一覧とページサイズを受け取る。
 * ページが切り替わったタイミングで呼び出しもとの親へ表示対象記事を渡す。
 */
export default defineComponent({
  name: 'AppPagenation',
  props: {
    /**
     * 記事一覧。
     * Contentの記事情報のリスト。
     * このリストがページング処理で分割されて表示される。
     */
    articles: {
      type: Array as PropType<Array<Article>>,
      required: true,
    },
    /**
     * ページサイズ。
     * 1ページあたりの表示記事数。
     */
    pageSize: {
      type: Number,
      required: true,
    },
  },
  emits: [
    /**
     * ページが切り替わったとき。
     */
    'change-page',
  ],
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
