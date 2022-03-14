<template>
  <div class="AppTableOfContents">
    <aside class="menu">
      <p class="menu-label">目次</p>
      <ul class="menu-list">
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <a :href="`#${link.id}`">{{ link.text }}</a>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Article } from '~/store'

/**
 * ## 目次
 *
 * 記事情報を受け取り、目次を表示するコンポーネント。
 * 目次のリンクをクリックすると、該当の見出しへ移動する。
 *
 */
export default defineComponent({
  name: 'AppTableOfContents',
  props: {
    /**
     * 記事（Article）。
     */
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
.AppTableOfContents {
  display: flex;
  justify-content: center;
  .menu {
    width: 80%;
    min-width: 88%;
    padding: $scale16 $scale32;
    margin-top: $scale32;
    margin-bottom: $scale32;
    background-color: $toc-bg-color;
    border: 1px solid $gray-color;
    box-shadow: 0 0 2px $light-gray-color;
    .menu-label {
      font-weight: $font-weight-700;
    }
    ul.menu-list {
      font-size: $font-size-096rem;
      li {
        &::before {
          top: 0;
          left: 0;
          display: block;
          width: 0;
          height: 0;
          content: ' ';
        }
        a {
          padding-top: $scale8;
          padding-bottom: $scale8;
          color: $dark-gray-color;
        }
        &:not(:first-child) {
          a {
            border-top: $border-width1 dashed #e0e0e0;
          }
        }
      }
      .toc2 {
        font-size: $font-size-096rem;
      }
      .toc3 {
        padding-left: $scale8;
        font-size: $font-size-092rem;
      }
    }
  }
}
</style>
