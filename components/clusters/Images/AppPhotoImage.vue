<template>
  <div :class="className">
    <div class="AppPhotoImage__Wrapper">
      <div class="AppPhotoImage__Photo">
        <AppAssetsImage
          :alt="alt"
          :path="`images/photo/${articleId}/${imgFileName}`"
        />
      </div>
    </div>
    <div v-if="caption" class="AppPhotoImage__Caption">{{ caption }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useCss from '~/composables/useCss'
import useId from '~/composables/useId'
import { bemx } from '~/utils/util'

/**
 * ## 写真イメージ
 *
 * 写真用のスタイルを適用して画像表示するコンポーネント。
 * assets配下を`images/photo/${articleId}/${imgFileName}`で画像パス指定する。
 * 写真の下に表示するキャプションも必ず設定すること。
 */
export default defineComponent({
  name: 'AppPhotoImage',
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
    /**
     * 背景色。
     * デフォルトは`$bg-secondary-color`が適用される。
     * 上書きしたい場合のみ、カラーコードで指定する。
     */
    backgroundColor: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const componentName = 'AppPhotoImage'
    const id = useId()

    // 背景色の指定がある場合のみ上書き
    if (props.backgroundColor) {
      useCss(
        () => `
        .${componentName}--${id} .${componentName}__Photo::before,
        .${componentName}--${id} .${componentName}__Photo::after {
          background-color: ${props.backgroundColor}
        }`
      )
    }

    const className = bemx(componentName, id)

    return {
      className,
    }
  },
})
</script>
<style lang="scss">
.AppPhotoImage {
  margin-top: $scale40;
  margin-bottom: $scale8;

  &__Wrapper {
    display: flex;
    justify-content: center;
  }

  &__Photo {
    position: relative;
    max-width: 60%;

    &::before,
    &::after {
      position: absolute;
      z-index: $z-index-1;
      width: 70px;
      height: 25px;
      content: '';
      background-color: $photo-image-frame-bg-color;
      transform: rotate(-35deg);
    }

    &::before {
      top: $photo-image-frame-tilt-top;
      left: $photo-image-frame-tilt-left;
      border-bottom: $border-width1 solid $photo-image-frame-border-color;
    }

    &::after {
      right: $photo-image-frame-tilt-right;
      bottom: $photo-image-frame-tilt-bottom;
      border-top: $border-width1 solid $photo-image-frame-border-color;
    }
    img {
      vertical-align: top;
      filter: sepia(0.25) contrast(1.1) brightness(1.1);
      border-radius: $border-radius8;
      box-shadow: 0 2px 4px $photo-image-shadow-color;

      &::before {
        content: '';
        background: $photo-image-blend-color;
        mix-blend-mode: lighten;
      }
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
