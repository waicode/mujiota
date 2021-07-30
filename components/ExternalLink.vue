<template>
  <div class="external-link">
    <a :href="link" target="_blank" rel="nofollow">
      <AssetsImage
        v-if="imgFileName"
        class="inbox-image"
        :path="assetsImagePath"
      />
      <div class="inbox-contents">
        <div class="inbox-title">{{ title }}</div>
        <div class="inbox-note">{{ note }}</div>
        <img
          v-if="aspMeasurementImgLink"
          border="0"
          width="1"
          height="1"
          :src="aspMeasurementImgLink"
          alt=""
        />
      </div>
    </a>
  </div>
</template>
<script>
import AssetsImage from '@/components/AssetsImage.vue'
export default {
  components: {
    AssetsImage,
  },
  props: {
    title: {
      require: true,
      type: String,
      default: '',
    },
    note: {
      require: true,
      type: String,
      default: '',
    },
    link: {
      require: true,
      type: String,
      default: '#',
    },
    imgFileName: {
      require: true,
      type: String,
      default: '',
    },
    aspMeasurementImgLink: {
      require: false,
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
    display: flex;
    justify-content: space-between;
    color: #333;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 0 2px #efefef;
    text-decoration: none;
    padding: 1rem;
    border-radius: 2px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #666;
      background: rgba(167, 255, 235, 0.24);
    }
    .inbox-image {
      width: 20%;
      border: 1px solid #e0e0e0;
      box-shadow: 0 0 1px #eee;
    }
    .inbox-contents {
      width: 76%;
      .inbox-title {
        font-weight: bold;
        margin-bottom: 8px;
        &::before {
          content: '外部リンク';
          font-size: 0.7em;
          font-weight: bold;
          color: rgb(255, 255, 255);
          width: 6em;
          display: inline-block;
          position: relative;
          top: -2px;
          text-align: center;
          margin-right: 0.5em;
          background: rgb(17, 17, 17);
          padding: 0.2em;
          border-radius: 2px;
        }
      }
      .inbox-note {
        font-size: 0.84rem;
      }
    }
  }
}
</style>
