<template>
  <div :class="className">
    <div class="AppHeader__HeaderBg"></div>
    <div class="AppHeader__Navbar">
      <AppNavbar logo-hide-top="80" menu-button-hide-top="83" />
    </div>
  </div>
</template>
<script lang="ts">
import { bemx } from '@/composables/util'

import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const className = bemx('AppHeader')
    return {
      className,
    }
  },
})
</script>
<style lang="scss">
.AppHeader {
  $header-bg-gradient-start-color: rgba(224, 224, 224, 0.85);
  $header-bg-gradient-end-color: rgba(97, 97, 97, 0.85);

  &__HeaderBg {
    position: absolute;
    top: 0;
    z-index: $z-index-minus-1;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      background-image: none;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      background-image: linear-gradient(
        160deg,
        $header-bg-gradient-start-color,
        $header-bg-gradient-end-color
      );
    }
  }
}
</style>
