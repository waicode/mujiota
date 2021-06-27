<template>
  <img :src="dynamicImageSrcPath" />
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
