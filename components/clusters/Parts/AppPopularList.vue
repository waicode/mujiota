<template>
  <div :class="className">
    <ol :class="className">
      <li v-for="article in popularArticles.slice(0, 5)" :key="article.rank">
        <NuxtLink :to="`/${article.data.post_id}/${article.data.post_slug}`">
          <h3>
            {{ $getTitle(article.data.post_id, articles) }}
          </h3>
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { bemx } from '~/composables/util'
import { Article, PopularArticle } from '~/store'

/**
 * ## 人気記事リスト
 *
 * 読まれている記事の一覧をランキング形式で表示するコンポーネント。
 * ランクとfirestoreの`DocumentData`を含む人気記事リストとContentの記事情報を受け取る。
 * 記事タイトルはContentの記事情報から取得する。
 */
export default defineComponent({
  name: 'AppPopularList',
  props: {
    /**
     * 人気記事リスト。
     * ランクと記事IDが含まれたfirestoreの`DocumentData`を含むオブジェクトの配列。
     */
    popularArticles: {
      type: Array as PropType<Array<PopularArticle>>,
      required: true,
    },
    /**
     * 記事一覧。
     * Contentの記事情報のリスト。記事タイトルを取得するために渡す。
     * 人気記事リストに含まれている記事はすべて渡す必要がある。
     */
    articles: {
      type: Array as PropType<Array<Article>>,
      required: true,
    },
  },
  setup() {
    const className = bemx('AppPopularList')
    return {
      className,
    }
  },
})
</script>
<style lang="scss">
.AppPopularList {
  ol {
    list-style: none;
    li {
      &:not(:last-child) {
        border-bottom: $border-width1 solid $side-bar-separator-border-color;
      }
      a {
        display: block;
        padding: $scale16;
        color: $side-bar-link-color;
        text-decoration: none;
        h3 {
          font-size: $font-size-081rem;
          font-weight: $font-weight-700;
          @media (max-width: $tablet) {
            font-size: $font-size-096rem;
          }
        }
      }
    }
  }
}
</style>
