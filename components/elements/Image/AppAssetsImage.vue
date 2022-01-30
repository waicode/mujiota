<template>
  <img v-lazy-load class="AppAssetsImage" :src="dynamicImageSrcPath" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppAssetsImage',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const dynamicImageSrcPath = computed(() =>
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`~/assets/${props.path}`)
    )
    return {
      dynamicImageSrcPath,
    }
  },
})
</script>
<style lang="scss">
.AppAssetsImage {
  background-image: linear-gradient(
    160deg,
    $lazy-load-gradient-white-color,
    $lazy-load-gradient-light-gray-color
  );
}
</style>
