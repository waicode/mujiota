<template>
  <div id="page-top">
    <transition name="fade">
      <button v-show="buttonActive" @click="returnTop"></button>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    scrollWindow() {
      const top = 100 // ボタンを表示させたい位置
      this.scroll = window.scrollY
      this.buttonActive = top <= this.scroll
    },
  },
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#page-top {
  width: 90px;
  height: 90px;
  position: fixed;
  right: 24px;
  bottom: 4px;
  opacity: 0.6;
  background-color: transparent;
  :focus,
  :hover {
    cursor: pointer;
  }
  button {
    position: relative;
    display: block;
    width: 90px;
    height: 90px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f102';
      font-size: 25px;
      color: #424242;
      position: absolute;
      width: 25px;
      height: 25px;
      top: -40px;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      text-align: center;
    }
    &::after {
      content: 'PAGE TOP';
      font-size: 13px;
      position: absolute;
      top: 45px;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      text-align: center;
      color: #424242;
    }
  }
}
</style>
