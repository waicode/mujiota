<template>
  <div class="AppCaptureImage">
    <div class="AppCaptureImage__Wrapper">
      <div class="AppCaptureImage__Capture">
        <AppAssetsImage
          :alt="alt"
          :path="`images/capture/${articleId}/${imgFileName}`"
        />
      </div>
    </div>
    <div v-if="caption" class="AppCaptureImage__Caption">{{ caption }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

/**
 * ## キャプチャ画像イメージ
 *
 * キャプチャ画像用のスタイルを適用して画像表示するコンポーネント。
 * assets配下を`images/capture/${articleId}/${imgFileName}`で画像パス指定する。
 * キャプチャ画像の下に表示するキャプションも必ず設定すること。
 */
export default defineComponent({
  name: 'AppCaptureImage',
  props: {
    /**
     * 記事ID。
     */
    articleId: {
      type: String,
      required: true,
    },
    /**
     * 画像ファイル名。
     */
    imgFileName: {
      type: String,
      required: true,
    },
    /**
     * 画像のaltテキスト。
     */
    alt: {
      type: String,
      default: undefined,
    },
    /**
     * キャプション。
     */
    caption: {
      type: String,
      required: true,
    },
  },
})
</script>
<style lang="scss">
.AppCaptureImage {
  margin-top: $scale40;
  margin-bottom: $scale8;

  &__Wrapper {
    display: flex;
    justify-content: center;
  }

  &__Capture {
    position: relative;
    max-width: 60%;
    img {
      vertical-align: top;
    }
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      content: '';
      border-style: solid;
      border-width: $border-width12;
      border-image-source: repeating-linear-gradient(
        45deg,
        $capture-image-border-color,
        $capture-image-border-color $border-width3,
        transparent 0,
        transparent 6px
      );
      border-image-slice: 20;
      border-image-repeat: round;
      transform: translate(-50%, -50%);
    }
  }

  &__Caption {
    padding-top: $scale24;
    padding-bottom: $scale16;
    font-size: $font-size-086rem;
    font-weight: $font-weight-700;
    text-align: center;
  }
}
</style>
