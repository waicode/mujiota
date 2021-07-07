<template>
  <div class="external-link">
    <a :href="link" target="_blank" rel="nofollow">
      <figure>
        <AssetsImage :path="assetsImagePath" />
      </figure>
      <div class="inbox">
        <p class="inbox-title">{{ title }}</p>
        <p class="inbox-note">{{ note }}</p>
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
      return `images/external/${this.imgFileName}`
    },
  },
}
</script>
<style lang="scss" scoped>
.external-link a {
  color: #333;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 1px 1px 0 #efefef;
  text-decoration: none;
  display: block;
  padding: 0.9em;
  .inbox-title {
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
}
</style>
