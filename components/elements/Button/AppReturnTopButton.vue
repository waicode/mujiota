<template>
  <div class="AppReturnTopButton">
    <transition name="fade">
      <div v-show="buttonActive">
        <div class="AppReturnTopButton__PageTopButton">
          <button @click="returnTop" />
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const buttonActive = ref(false)
    const scroll = ref(0)

    const scrollDisplayControl = () => {
      const top = 100 // ボタンを表示させたい位置
      scroll.value = window.scrollY
      buttonActive.value = top <= scroll.value
    }

    const returnTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', scrollDisplayControl)
    })

    return {
      buttonActive,
      scroll,
      returnTop,
    }
  },
})
</script>

<style lang="scss">
.AppReturnTopButton {
  $return-top-button-width: 80px;
  $return-top-button-height: $return-top-button-width;
  $return-top-icon-width: 24px;
  $return-top-icon-height: $return-top-icon-width;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0%;
  }

  &__PageTopButton {
    position: fixed;
    right: 20px;
    bottom: 16px;
    width: $return-top-button-width;
    height: $return-top-button-height;
    background-color: $return-top-button-color;
    border-radius: $border-radius40;
    opacity: 0.6;
    :focus,
    :hover {
      cursor: pointer;
    }
    button {
      position: relative;
      display: block;
      width: $return-top-button-width;
      height: $return-top-button-height;
      text-decoration: none;
      background-color: transparent;
      border: none;
      &::before {
        position: absolute;
        top: -28px;
        right: 0;
        bottom: 0;
        left: 0;
        width: $return-top-icon-width;
        height: $return-top-icon-height;
        margin: auto;
        font-family: 'Font Awesome 5 Free';
        font-size: $font-size-160rem;
        font-weight: $font-weight-900;
        color: $white-color;
        content: '\f102';
      }
      &::after {
        position: absolute;
        top: 45px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        font-size: $font-size-092rem;
        color: $white-color;
        text-align: center;
        content: 'PAGE TOP';
      }
    }
  }
}
</style>
