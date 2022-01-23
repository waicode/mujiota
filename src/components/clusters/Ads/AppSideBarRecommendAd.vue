<template>
  <div>
    <div v-if="tags.includes('コーヒー')">
      <h2>リコメンド</h2>
      <div class="side-content">
        <h3 class="text-content">お試し価格のお得なコーヒー豆</h3>
        <p class="text-content">
          北海道産・焙煎したての香り高いコーヒー豆を驚きの値段で買うことができます。お一人様1回限りです。
        </p>
        <p class="ad-banner">
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
<script>
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppSideBarRecommendAd',
  setup() {
    const { store } = useContext()
    const tags = computed(() => {
      const article = store.state.page.article
      return !article || !Object.keys(article).length ? [] : article.tags
    })
    return {
      tags,
    }
  },
})
</script>
<style lang="scss">
.ad-banner {
  margin-top: 8px;
  margin-bottom: 12px;
  padding: 4px;
  text-align: center;
  a {
    img {
      border-radius: 2px;
    }
  }
}
</style>
