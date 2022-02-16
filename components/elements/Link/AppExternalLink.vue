<template>
  <div class="AppExternalLink">
    <a :href="link" target="_blank" rel="nofollow">
      <div class="columns AppExternalLink__Wrapper">
        <div
          class="AppExternalLink__LinkImage column is-3-desktop is-5-tablet is-12-mobile"
        >
          <AppAssetsImage
            v-if="imgFileName"
            :path="`images/link/external/${imgFileName}`"
          />
        </div>
        <div class="column is-9-desktop is-7-tablet is-12-mobile">
          <div class="AppExternalLink__LinkTitle">{{ title }}</div>
          <div class="AppExternalLink__LinkNote">{{ note }}</div>
          <img
            v-if="aspMeasurementImgLink"
            border="0"
            width="1"
            height="1"
            :src="aspMeasurementImgLink"
            alt=""
          />
        </div>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

/**
 * ## 外部リンク用リンクボックス
 *
 * 外部リンク表示用のコンポーネント。
 * タイトル、説明、外部サイト遷移先のURL、画像ファイル名を受け取りリンクボックスを表示する。
 * assets配下を`images/capture/external/${imgFileName}`で画像パス指定する。
 * 任意でASP測定用の画像リンクも設定できる。
 */
export default defineComponent({
  name: 'AppExternalLink',
  props: {
    /**
     * タイトル。
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * 説明。
     */
    note: {
      type: String,
      required: true,
    },
    /**
     * 外部サイト遷移先のURL。
     */
    link: {
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
     * ASP測定用の画像リンク。
     */
    aspMeasurementImgLink: {
      type: String,
      default: undefined,
    },
  },
})
</script>
<style lang="scss">
.AppExternalLink {
  margin: $scale28 0;

  .AppExternalLink__Wrapper {
    padding: $scale4;
    color: $black-color;
    text-decoration: none;
    background: $white-color;
    border: $border-width1 solid $border-gray-color;
    border-radius: $border-radius2;
    box-shadow: 0 0 2px $link-box-shadow-color;
    transition: 0.3s ease-in-out;
    &:hover {
      color: $link-hover-color;
      background: $link-hover-bg-color;
    }
  }

  .AppExternalLink__LinkImage {
    img {
      vertical-align: top;
      border: $border-width1 solid $border-gray-color;
      box-shadow: 0 0 1px $link-image-shadow-color;
    }
  }

  .AppExternalLink__LinkTitle {
    margin-bottom: $scale8;
    font-weight: $font-weight-700;
    &::before {
      position: relative;
      top: -2px;
      display: inline-block;
      width: 6em;
      padding: $scale4;
      margin-right: $scale8;
      font-size: $font-size-070rem;
      font-weight: $font-weight-700;
      color: $white-color;
      text-align: center;
      content: '外部リンク';
      background: $dark-black-color;
      border-radius: $border-radius2;
    }
  }
  .AppExternalLink__LinkNote {
    font-size: $font-size-096rem;
  }
}
</style>
