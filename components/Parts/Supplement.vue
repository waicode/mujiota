<template>
  <div :class="[displayType]" class="supplement">
    <p class="title">
      <span v-if="displayType === 'warning'" class="title">
        <WarningIconSvg />
      </span>
      <span v-else class="title"><ChatIconSvg /></span>
      {{ title }}
    </p>
    <p class="discription">
      <slot></slot>
    </p>
  </div>
</template>
<script>
import ChatIconSvg from '@/assets/images/shared/icon/ic_chat_24px.svg'
import WarningIconSvg from '@/assets/images/shared/icon/ic_warning_24px.svg'
export default {
  components: {
    ChatIconSvg,
  },
  props: {
    displayType: {
      require: true,
      type: String,
      default: null,
      validator(val) {
        return ['normal', 'warning'].includes(val)
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.supplement {
  background: rgba(255, 255, 0, 0.2);
  font-size: 0.92em;
  padding: 1em;
  margin: 1.5em 0 2em;
  border-radius: 4px;
  border: 1px solid rgba(237, 237, 237, 0.5);
  &.warning {
  }
}
</style>
