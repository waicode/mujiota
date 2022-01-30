<template>
  <div class="external-link">
    <a :href="link" target="_blank" rel="nofollow">
      <div class="columns wrap">
        <div class="link-image column is-3-desktop is-5-tablet is-12-mobile">
          <AppAssetsImage v-if="imgFileName" :path="assetsImagePath" />
        </div>
        <div class="link-info column is-9-desktop is-7-tablet is-12-mobile">
          <div class="link-title">{{ title }}</div>
          <div class="link-note">{{ note }}</div>
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
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    note: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    imgFileName: {
      required: true,
      type: String,
    },
    aspMeasurementImgLink: {
      type: String,
      default: null,
    },
  },
  computed: {
    assetsImagePath() {
      return `images/link/external/${this.imgFileName}`
    },
  },
}
</script>
<style lang="scss" scoped>
.external-link {
  margin: $scale28 0;
  a {
    .wrap {
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
      .link-image {
        img {
          vertical-align: top;
          border: $border-width1 solid $border-gray-color;
          box-shadow: 0 0 1px $link-image-shadow-color;
        }
      }
      .link-info {
        .link-title {
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
        .link-note {
          font-size: $font-size-096rem;
        }
      }
    }
  }
}
</style>
