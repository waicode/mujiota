<template>
  <div :class="className">
    <div class="AppVideoLink__Video">
      <youtube :video-id="id" class="youtube" :width="videoWidth()"></youtube>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import useId from '~/composables/useId'
import useCss from '~/composables/useCss'
import { bemx } from '~/composables/util'

/**
 * ## 動画用リンクボックス
 *
 * Youtube動画表示用のコンポーネント。
 * YoutubeのIDを受け取り、動画を表示する。
 * 画面幅に合わせて動画の幅を変える。
 */
export default defineComponent({
  name: 'AppVideoLink',
  props: {
    /**
     * Youtube動画のID。
     */
    id: {
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
    const componentName = `AppVideoLink`
    const id = useId()

    // 背景色の指定がある場合のみ上書き
    if (props.backgroundColor) {
      useCss(
        () => `
        .${componentName}--${id} .AppVideoLink__Video::before,
        .${componentName}--${id} .AppVideoLink__Video::after {
          background-color: ${props.backgroundColor}
        }`
      )
    }

    const className = bemx(componentName, id)

    const videoWidth = () => {
      let mobileMediaQuery
      if (process.client) {
        mobileMediaQuery = window.matchMedia('(max-width: 768px)') // < $tablet
      }
      return mobileMediaQuery && mobileMediaQuery.matches ? '320px' : '640px'
    }
    return {
      className,
      videoWidth,
    }
  },
})
</script>
<style lang="scss">
.AppVideoLink {
  display: flex;
  justify-content: center;
  max-width: 640px;
  padding: $scale32 0;
  margin: 0 auto;
  @media (max-width: $tablet) {
    max-width: 100%;
  }

  &__Video {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      z-index: $z-index-1;
      width: 70px;
      height: 25px;
      content: '';
      background-color: $bg-secondary-color;
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
  }
}
</style>
