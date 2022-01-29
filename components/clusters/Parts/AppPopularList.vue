<template>
  <div :class="className">
    <ol :class="className">
      <li v-for="article in popularArticles.slice(0, 5)" :key="article.rank">
        <NuxtLink :to="`/${article.data.post_id}/${article.data.post_slug}`">
          <h3>
            {{ $getTitle(article.data.post_id, popularArticles) }}
          </h3>
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { bemx } from '~/composables/util'
import { Article } from '~/store'

export default defineComponent({
  name: 'AppPopularList',
  props: {
    popularArticles: {
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
