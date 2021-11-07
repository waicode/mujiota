<template>
  <div>
    <template v-if="error.statusCode === 404">
      <h2>ページが見つかりませんでした</h2>
      <p>お探しのページをキーワードで検索してみてください。</p>
    </template>
  </div>
</template>
<script>
export default {
  name: 'MujiotaLayoutError',
  props: {
    error: {
      require: true,
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
h2 {
  position: relative;
  margin-top: 0;
  margin-bottom: 40px;
  padding-bottom: 16px;
  font-size: 1.4rem;
  font-weight: bold;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-image: repeating-linear-gradient(
      45deg,
      #e0e0e0 0,
      #e0e0e0 1px,
      rgb(0 0 0 / 0%) 0%,
      rgb(0 0 0 / 0%) 50%
    );
    background-size: 8px 8px;
  }
  a {
    .icon {
      display: none;
    }
  }
}
</style>
