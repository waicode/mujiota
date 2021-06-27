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
