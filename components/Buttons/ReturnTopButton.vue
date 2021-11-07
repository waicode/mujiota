<template>
  <div id="page-top">
    <transition name="fade">
      <div v-show="buttonActive">
        <div class="wrap">
          <button @click="returnTop"></button>
        </div>
      </div>
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
  opacity: 0%;
}

#page-top {
  .wrap {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    position: fixed;
    right: 20px;
    bottom: 16px;
    opacity: 60%;
    background-color: #424242;
    :focus,
    :hover {
      cursor: pointer;
    }
    button {
      position: relative;
      display: block;
      width: 80px;
      height: 80px;
      text-decoration: none;
      border: none;
      background-color: transparent;
      &::before {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f102';
        font-size: 24px;
        color: #fff;
        position: absolute;
        width: 24px;
        height: 24px;
        top: -28px;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
      }
      &::after {
        content: 'PAGE TOP';
        font-size: 10px;
        position: absolute;
        top: 45px;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
