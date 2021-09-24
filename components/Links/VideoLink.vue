<template>
  <div class="video-link">
    <div class="video">
      <youtube :video-id="id" class="youtube" :width="videoWidth()"></youtube>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      require: true,
      type: String,
      default: null,
    },
  },
  methods: {
    videoWidth() {
      let mobileMediaQuery = null
      if (process.client) {
        mobileMediaQuery = window.matchMedia('(max-width: 768px)') // < $tablet
      }
      return mobileMediaQuery && mobileMediaQuery.matches ? '320px' : '640px'
    },
  },
}
</script>
<style lang="scss" scoped>
.video-link {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 640px;
  @media (max-width: $tablet) {
    max-width: 100%;
  }
  padding: 2rem 0;
}
.video {
  position: relative;
}
.video::before,
.video::after {
  content: '';
  position: absolute;
  transform: rotate(-35deg);
  width: 70px;
  height: 25px;
  background-color: #fafafa;
  z-index: 1;
}
.video::before {
  top: -10px;
  left: -25px;
  border-bottom: 1px solid #cfd8dc;
}
.video::after {
  bottom: -10px;
  right: -25px;
  border-top: 1px solid #cfd8dc;
}
</style>
