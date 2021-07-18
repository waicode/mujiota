<template>
  <img class="lazy-load-image" v-lazy-load :src="dynamicImageSrcPath" />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicImageSrcPath() {
      return require(`~/assets/${this.path}`)
    },
  },
}
</script>
<style lang="scss" scoped>
.lazy-load-image {
  background-color: #d7ccc8;
}
</style>
