<template>
  <img v-lazy-load class="AppAssetsImage" :src="dynamicImageSrcPath" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

/**
 * ## 画像イメージ
 *
 * 画像表示用のコンポーネント。
 * assetsから画像を動的に読み込み、遅延ロードで表示する。
 */
export default defineComponent({
  name: 'AppAssetsImage',
  /**
   * 画像パス（assetsフォルダ配下のパスを指定）
   */
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const dynamicImageSrcPath = computed(() =>
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`~/assets/${props.path}`)
    )
    return {
      dynamicImageSrcPath,
    }
  },
})
</script>
<style lang="scss">
.AppAssetsImage {
  background-image: linear-gradient(
    160deg,
    $lazy-load-gradient-white-color,
    $lazy-load-gradient-light-gray-color
  );
}
</style>
