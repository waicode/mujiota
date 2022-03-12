<template>
  <div>
    <h2 v-if="error.statusCode === 404" class="MujiotaError__Heading">
      ページが見つかりませんでした
    </h2>
    <h2 v-else class="MujiotaError__Heading">エラーが発生しました</h2>
    <p>お探しのページをキーワードで検索してみてください。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MujiotaLayoutError',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
})
</script>
<style lang="scss">
.MujiotaError {
  &__Heading {
    position: relative;
    padding-bottom: $scale12;
    margin-top: 0;
    margin-bottom: $scale40;
    font-size: $font-size-140rem;
    font-weight: $font-weight-700;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      content: '';
      background-image: repeating-linear-gradient(
        45deg,
        $repeating-linear-gradient-light-stripe-color 0,
        $repeating-linear-gradient-light-stripe-color 1px,
        transparent 0%,
        transparent 50%
      );
      background-size: 8px 8px;
    }
  }
}
</style>
