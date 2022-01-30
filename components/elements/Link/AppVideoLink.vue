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
  padding: $scale32 0;
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
  z-index: $z-index-1;
  width: 70px;
  height: 25px;
  content: '';
  background-color: $bg-secondary-color;
  transform: rotate(-35deg);
}
.video::before {
  top: $photo-image-frame-tilt-top;
  left: $photo-image-frame-tilt-left;
  border-bottom: $border-width1 solid $photo-image-frame-border-color;
}
.video::after {
  right: $photo-image-frame-tilt-right;
  bottom: $photo-image-frame-tilt-bottom;
  border-top: $border-width1 solid $photo-image-frame-border-color;
}
</style>
