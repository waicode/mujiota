<template>
  <div :class="[type]" class="AppSupplement">
    <div class="title">
      <span v-if="type === 'warning'" class="title">
        <WarningIconSvg />
      </span>
      <span v-else class="title"><ChatIconSvg /></span>
      {{ title }}
    </div>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ChatIconSvg from '@/assets/images/shared/icon/ic_chat_24px.svg'
import WarningIconSvg from '@/assets/images/shared/icon/ic_warning_24px.svg'

export default {
  name: 'AppSupplement',
  components: {
    ChatIconSvg,
    WarningIconSvg,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator(val) {
        return ['normal', 'warning'].includes(val)
      },
    },
    title: {
      required: true,
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
.AppSupplement {
  padding: $scale16;
  margin: $scale24 0 $scale32;
  font-size: $font-size-092rem;
  background: $supplement-info-bg-color;
  border: $border-width1 solid $supplement-border-color;
  border-radius: $border-radius4;
  &.warning {
    background: $supplement-warning-bg-color;
  }
  .title {
    margin-bottom: $scale8;
    font-size: $font-size-092rem;
    svg {
      width: $font-size-092rem;
      height: $font-size-092rem;
      vertical-align: text-bottom;
      fill: $text;
    }
  }
}
</style>
