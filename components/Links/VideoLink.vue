<template>
  <div class="video-link">
    <div class="video">
      <youtube :video-id="id" class="youtube"></youtube>
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
}
</script>
<style lang="scss" scoped>
.video-link {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 640px;
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
