<template>
  <div class="capture-image">
    <div class="capture-wrapper">
      <div class="capture">
        <AppAssetsImage :path="`images/capture/${articleId}/${imgFileName}`" />
      </div>
    </div>
    <div v-if="caption" class="caption">{{ caption }}</div>
  </div>
</template>
<script>
export default {
  props: {
    articleId: {
      required: true,
      type: String,
    },
    imgFileName: {
      required: true,
      type: String,
    },
    caption: {
      required: true,
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
.capture-image {
  margin-top: $scale40;
  margin-bottom: $scale8;
}
.capture-wrapper {
  display: flex;
  justify-content: center;
}
.capture {
  position: relative;
  max-width: 60%;
  img {
    vertical-align: top;
  }
}
.capture::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  content: '';
  border-style: solid;
  border-width: $border-width12;
  border-image-source: repeating-linear-gradient(
    45deg,
    $capture-image-border-color,
    $capture-image-border-color $border-width3,
    transparent 0,
    transparent 6px
  );
  border-image-slice: 20;
  border-image-repeat: round;
  transform: translate(-50%, -50%);
}
.caption {
  padding-top: $scale24;
  padding-bottom: $scale16;
  font-size: $font-size-086rem;
  font-weight: $font-weight-700;
  text-align: center;
}
</style>
