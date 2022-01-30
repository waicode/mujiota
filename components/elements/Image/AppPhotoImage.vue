<template>
  <div class="photo-image">
    <div class="photo-wrapper">
      <div class="photo">
        <AppAssetsImage :path="`images/photo/${articleId}/${imgFileName}`" />
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
.photo-image {
  margin-top: $scale40;
  margin-bottom: $scale8;
}
.photo-wrapper {
  display: flex;
  justify-content: center;
}
.photo {
  position: relative;
  max-width: 60%;
  img {
    vertical-align: top;
    filter: sepia(0.25) contrast(1.1) brightness(1.1);
    border-radius: $border-radius8;
    box-shadow: 0 2px 4px $photo-image-shadow-color;

    &::before {
      content: '';
      background: $photo-image-blend-color;
      mix-blend-mode: lighten;
    }
  }
}
.photo::before,
.photo::after {
  position: absolute;
  z-index: $z-index-minus-1;
  width: 70px;
  height: 25px;
  content: '';
  background-color: $photo-image-frame-bg-color;
  transform: rotate(-35deg);
}

.photo::before {
  top: $photo-image-frame-tilt-top;
  left: $photo-image-frame-tilt-left;
  border-bottom: $border-width1 solid $photo-image-frame-border-color;
}

.photo::after {
  right: $photo-image-frame-tilt-right;
  bottom: $photo-image-frame-tilt-bottom;
  border-top: $border-width1 solid $photo-image-frame-border-color;
}
.caption {
  padding-top: $scale24;
  padding-bottom: $scale16;
  font-size: $font-size-086rem;
  font-weight: $font-weight-700;
  text-align: center;
}
</style>
