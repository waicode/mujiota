<template>
  <img v-lazy-load class="lazy-load-image" :src="dynamicImageSrcPath" />
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
  background-image: linear-gradient(
    160deg,
    rgb(250 250 250 / 85%),
    rgb(239 235 233 / 85%)
  );
}
</style>
