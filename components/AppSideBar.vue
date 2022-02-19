<template>
  <div :class="className">
    <template v-if="$accessor.popularArticles.length > 0">
      <h2>読まれている記事</h2>
      <div class="AppSideBar__PopularList">
        <AppPopularList
          :popular-articles="$accessor.popularArticles"
          :articles="$accessor.articles"
        />
      </div>
    </template>
    <h2>コンセプト</h2>
    <div class="AppSideBar__Concept">
      <p class="AppSideBar__ConceptText">
        MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。
      </p>
      <!-- TODO: コンセプトページ追加 -->
      <!-- <p class="AppSideBar__ConceptTextLinkMore"><a href="#">> より詳しく見てみる</a></p> -->
    </div>
    <h2>タグ</h2>
    <div class="AppSideBar__Tag">
      <template v-if="$accessor.tags.length > 0">
        <AppTagDropdown label="タグを選択" :tags="$accessor.tags" />
      </template>
    </div>
    <h2>アーカイブ</h2>
    <div class="AppSideBar__Archive">
      <template v-if="$accessor.archives.length > 0">
        <AppArchiveDropdown label="月を選択" :archives="$accessor.archives" />
      </template>
    </div>
    <div class="AppSideBar__RecommendAd">
      <AppSideBarRecommendAd />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { bemx } from '~/composables/util'

/**
 * ## サイドバー
 *
 * ブログ全体のサイドバーコンポーネント。
 * よく読まれている記事や、タグ・アーカイブページ選択ドロップダウンを呼び出す。
 *
 */
export default defineComponent({
  name: 'AppSideBar',
  setup() {
    const className = bemx('AppSideBar')
    return {
      className,
    }
  },
})
</script>
<style lang="scss">
$ad-side-top-width: 250px;
$ad-side-top-height: $ad-side-top-width;
$ad-side-bottom-width: $ad-side-top-width;
$ad-side-bottom-height: 500px;

.AppSideBar {
  h2 {
    margin-bottom: $scale12;
    font-size: $font-size-131rem;
    font-weight: $font-weight-700;
  }
  h3 {
    font-size: $font-size-081rem;
    font-weight: $font-weight-700;
  }

  // &__AdSideTop {
  //   width: $ad-side-top-width;
  //   height: $ad-side-top-height;
  //   margin: 0 auto $scale40;
  //   background-color: $ad-bg-color;
  // }

  &__PopularList {
    margin-bottom: $scale20;
  }

  &__Concept {
    margin-bottom: $scale20;
  }
  &__ConceptText {
    padding: $scale4;
    margin-bottom: $scale4;
    font-size: $font-size-081rem;
    line-height: $line-height-160;
    @media (max-width: $tablet) {
      font-size: $font-size-096rem;
    }
  }
  &__ConceptTextLinkMore {
    font-size: $font-size-076rem;
    text-align: right;
    text-decoration: underline;
    a {
      color: $side-bar-link-color;
    }
  }

  &__Tag,
  &__Archive {
    margin-bottom: $scale20;
  }

  // &__AdSideBottom {
  //   display: block;
  //   width: $ad-side-bottom-width;
  //   height: $ad-side-bottom-height;
  //   margin: $scale40 auto;
  //   background-color: $ad-bg-color;
  // }

  // &__RecommendAd {
  // }
}
</style>
