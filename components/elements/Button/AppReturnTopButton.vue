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
    position: fixed;
    right: 20px;
    bottom: 16px;
    width: 80px;
    height: 80px;
    background-color: #424242;
    border-radius: 40px;
    opacity: 60%;
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
      background-color: transparent;
      border: none;
      &::before {
        position: absolute;
        top: -28px;
        right: 0;
        bottom: 0;
        left: 0;
        width: 24px;
        height: 24px;
        margin: auto;
        font-family: 'Font Awesome 5 Free';
        font-size: 24px;
        font-weight: 900;
        color: #fff;
        content: '\f102';
      }
      &::after {
        position: absolute;
        top: 45px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        font-size: 10px;
        color: #fff;
        text-align: center;
        content: 'PAGE TOP';
      }
    }
  }
}
</style>
