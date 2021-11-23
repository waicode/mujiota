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
  max-width: 60%;
  position: relative;
  img {
    box-shadow: 0 2px 4px rgba(67, 133, 187, 0.07);
    vertical-align: top;
    border-radius: 8px;
    filter: sepia(0.25) contrast(1.1) brightness(1.1);

    &::before {
      background: rgba(230, 193, 61, 0.1);
      content: '';
      mix-blend-mode: lighten;
    }
  }
}
.photo::before,
.photo::after {
  content: '';
  position: absolute;
  transform: rotate(-35deg);
  width: 70px;
  height: 25px;
  background-color: #fafafa;
  z-index: 1;
}

.photo::before {
  top: -10px;
  left: -25px;
  border-bottom: 1px solid #cfd8dc;
}

.photo::after {
  bottom: -10px;
  right: -25px;
  border-top: 1px solid #cfd8dc;
}
.caption {
  text-align: center;
  font-weight: bold;
  font-size: 0.88rem;
  padding-top: 24px;
  padding-bottom: 16px;
}
</style>
