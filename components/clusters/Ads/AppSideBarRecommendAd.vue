<template>
  <div class="AppSideBarRecommendAd">
    <div v-if="tags.includes(TAG_KEYS.COFFEE)">
      <h2>リコメンド</h2>
      <div class="AppSideBarRecommendAd__Recommend">
        <h3>お試し価格のお得なコーヒー豆</h3>
        <p class="AppSideBarRecommendAd__RecommendText">
          北海道産・焙煎したての香り高いコーヒー豆を驚きの値段で買うことができます。お一人様1回限りです。
        </p>
        <p class="AppSideBarRecommendAd__Banner">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=2NP03M+DJM7EA+2CG0+64RJ5"
            rel="nofollow"
          >
            <img
              border="0"
              width="300"
              height="250"
              alt=""
              src="https://www21.a8.net/svt/bgt?aid=160730050819&wid=009&eno=01&mid=s00000010944001030000&mc=1"
          /></a>
          <img
            border="0"
            width="1"
            height="1"
            src="https://www10.a8.net/0.gif?a8mat=2NP03M+DJM7EA+2CG0+64RJ5"
            alt=""
          />
        </p>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'
import { TAG_KEYS } from '~/plugins/taxonomy'

/**
 * ## サイドバー関連広告
 *
 * サイドバーに配置する関連広告を表示するコンポーネント。
 * 表示されている記事のカテゴリに合わせて、最適な広告を表示する。
 * 記事情報はグローバルコンテキストのstoreから取得する。
 */
export default defineComponent({
  name: 'AppSideBarRecommendAd',
  setup() {
    const { store } = useContext()
    const tags = computed(() => {
      const { article } = store.state.page
      return !article || !Object.keys(article).length ? [] : article.tags
    })
    return {
      tags,
      TAG_KEYS,
    }
  },
})
</script>
<style lang="scss">
.AppSideBarRecommendAd {
  h2 {
    margin-bottom: $scale16;
    font-size: $font-size-131rem;
    font-weight: $font-weight-700;
  }

  h3 {
    font-size: $font-size-081rem;
    font-weight: $font-weight-700;
  }

  &__RecommendText {
    padding: $scale4;
    margin-bottom: $scale4;
    font-size: $font-size-081rem;
    line-height: $line-height-160;
    @media (max-width: $tablet) {
      font-size: $font-size-096rem;
    }
  }

  &__Banner {
    padding: $scale4;
    margin-top: $scale8;
    margin-bottom: $scale12;
    text-align: center;
    a {
      img {
        border-radius: $border-radius2;
      }
    }
  }
}
</style>
