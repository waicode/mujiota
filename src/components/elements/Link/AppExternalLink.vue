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
  margin: 1.8em 0;
  a {
    .wrap {
      color: #333;
      background: #fff;
      border: 1px solid #eee;
      box-shadow: 0 0 2px #efefef;
      text-decoration: none;
      padding: 0.25rem;
      border-radius: 2px;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #666;
        background: rgba(167, 255, 235, 0.24);
      }
      .link-image {
        img {
          border: 1px solid #e0e0e0;
          box-shadow: 0 0 1px #eee;
          vertical-align: top;
        }
      }
      .link-info {
        .link-title {
          font-weight: bold;
          margin-bottom: 8px;
          &::before {
            content: '外部リンク';
            font-size: 0.7em;
            font-weight: bold;
            color: #fff;
            width: 6em;
            display: inline-block;
            position: relative;
            top: -2px;
            text-align: center;
            margin-right: 0.5em;
            background: #111;
            padding: 0.2em;
            border-radius: 2px;
          }
        }
        .link-note {
          font-size: 0.96rem;
        }
      }
    }
  }
}
</style>
