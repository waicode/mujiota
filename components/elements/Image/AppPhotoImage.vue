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
  margin-top: 40px;
  margin-bottom: 8px;
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
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(67, 133, 187, 0.07);

    &::before {
      content: '';
      background: rgba(230, 193, 61, 0.1);
      mix-blend-mode: lighten;
    }
  }
}
.photo::before,
.photo::after {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 25px;
  content: '';
  background-color: #fafafa;
  transform: rotate(-35deg);
}

.photo::before {
  top: -10px;
  left: -25px;
  border-bottom: 1px solid #cfd8dc;
}

.photo::after {
  right: -25px;
  bottom: -10px;
  border-top: 1px solid #cfd8dc;
}
.caption {
  padding-top: 24px;
  padding-bottom: 16px;
  font-size: 0.88rem;
  font-weight: bold;
  text-align: center;
}
</style>
