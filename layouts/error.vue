<template>
  <div class="Mujiota">
    <template v-if="error.statusCode === 404">
      <h2>ページが見つかりませんでした</h2>
      <p>お探しのページをキーワードで検索してみてください。</p>
    </template>
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
.Mujiota {
  h2 {
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
        #e0e0e0 0,
        #e0e0e0 1px,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 50%
      );
      background-size: 8px 8px;
    }
    a {
      .icon {
        display: none;
      }
    }
  }
}
</style>
