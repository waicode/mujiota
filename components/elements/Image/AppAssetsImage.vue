<template>
  <img
    v-lazy-load
    :alt="imageAltText"
    class="AppAssetsImage"
    :src="dynamicImageSrcPath"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { getFileName } from '~/composables/util'

/**
 * ## 画像イメージ
 *
 * 画像表示用のコンポーネント。
 * assetsから画像を動的に読み込み、遅延ロードで表示する。
 * altテキストが未指定の場合はファイル名がalt属性に設定される。
 */
export default defineComponent({
  name: 'AppAssetsImage',
  props: {
    /**
     * 画像パス。
     * assetsフォルダ配下のパスを指定する。
     */
    path: {
      type: String,
      required: true,
    },
    /**
     * 画像のaltテキスト。
     * 未指定の場合は、ファイル名がalt属性に設定される。
     */
    alt: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const dynamicImageSrcPath = computed(() =>
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`~/assets/${props.path}`)
    )

    // altが未指定の場合は、ファイル名から取得
    const imageAltText = props.alt ? props.alt : getFileName(props.path)

    return {
      dynamicImageSrcPath,
      imageAltText,
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
