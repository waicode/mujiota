<template>
  <div :class="[type]" class="supplement">
    <div class="title">
      <span v-if="type === 'warning'" class="title">
        <WarningIconSvg />
      </span>
      <span v-else class="title"><ChatIconSvg /></span>
      {{ title }}
    </div>
    <div class="discription">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ChatIconSvg from '@/assets/images/shared/icon/ic_chat_24px.svg'
import WarningIconSvg from '@/assets/images/shared/icon/ic_warning_24px.svg'
export default {
  name: 'MujiotaSupplement',
  components: {
    ChatIconSvg,
    WarningIconSvg,
  },
  props: {
    type: {
      require: true,
      type: String,
      default: null,
      validator(val) {
        return ['normal', 'warning'].includes(val)
      },
    },
    title: {
      require: true,
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.supplement {
  background: rgba(255, 249, 196, 0.6);
  font-size: 0.92rem;
  padding: 1rem;
  margin: 1.5rem 0 2rem;
  border-radius: 4px;
  border: 1px solid #ededed;
  &.warning {
    background: rgba(255, 205, 210, 0.6);
  }
  .title {
    font-size: 0.92rem;
    margin-bottom: 8px;
    svg {
      width: 0.92rem;
      height: 0.92rem;
      vertical-align: text-bottom;
      fill: $text;
    }
  }
}
</style>
