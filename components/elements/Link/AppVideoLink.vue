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
      required: true,
      type: String,
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
  max-width: 640px;
  padding: 2rem 0;
  margin: 0 auto;
  @media (max-width: $tablet) {
    max-width: 100%;
  }
}
.video {
  position: relative;
}
.video::before,
.video::after {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 25px;
  content: '';
  background-color: #fafafa;
  transform: rotate(-35deg);
}
.video::before {
  top: -10px;
  left: -25px;
  border-bottom: 1px solid #cfd8dc;
}
.video::after {
  right: -25px;
  bottom: -10px;
  border-top: 1px solid #cfd8dc;
}
</style>
