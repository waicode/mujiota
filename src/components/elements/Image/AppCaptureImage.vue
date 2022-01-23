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
  margin-top: 40px;
  margin-bottom: 8px;
}
.capture-wrapper {
  display: flex;
  justify-content: center;
}
.capture {
  max-width: 60%;
  position: relative;
  img {
    vertical-align: top;
  }
}
.capture::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  border-image-source: repeating-linear-gradient(
    45deg,
    #e0e0e0,
    #e0e0e0 3px,
    transparent 0,
    transparent 6px
  );
  border-image-slice: 20;
  border-image-repeat: round;
  border-style: solid;
  border-width: 12px;
}
.caption {
  text-align: center;
  font-weight: bold;
  font-size: 0.88rem;
  padding-top: 24px;
  padding-bottom: 16px;
}
</style>
