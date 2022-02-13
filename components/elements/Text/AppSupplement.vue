<template>
  <div :class="className">
    <div class="AppSupplement__Title">
      <span v-if="type === SUPPLEMENT_TYPE.WARNING" class="AppSupplement__Icon">
        <WarningIconSvg />
      </span>
      <span v-else class="AppSupplement__Icon"><ChatIconSvg /></span>
      {{ title }}
    </div>
    <div class="AppSupplement__Description">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api'

import ChatIconSvg from '@/assets/images/shared/icon/ic_chat_24px.svg'
import WarningIconSvg from '@/assets/images/shared/icon/ic_warning_24px.svg'

import { arrayToEnumObject, bemx, ValueTypeOf } from '~/composables/util'

const SUPPLEMENT_TYPE = arrayToEnumObject(['normal', 'warning'])
type SupplementType = ValueTypeOf<typeof SUPPLEMENT_TYPE>

/**
 * ## 補足説明
 *
 * 補足説明を表示するコンポーネント。
 * 補足説明の種別とタイトルをprops、本文はslotで受け取る。
 * 種別によってスタイルが変化する。
 */
export default defineComponent({
  name: 'AppSupplement',
  components: {
    ChatIconSvg,
    WarningIconSvg,
  },
  props: {
    /**
     * 補足説明の種別。
     * 通常（normal）か警告（warning）を指定する。
     */
    type: {
      type: String as PropType<SupplementType>,
      required: true,
    },
    /**
     * タイトル。
     */
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const className = computed(() =>
      bemx('AppSupplement', { type: props.type })
    )

    return {
      className,
      SUPPLEMENT_TYPE,
    }
  },
})
</script>
<style lang="scss">
.AppSupplement {
  padding: $scale16;
  margin: $scale24 0 $scale32;
  font-size: $font-size-092rem;
  background: $supplement-info-bg-color;
  border: $border-width1 solid $supplement-border-color;
  border-radius: $border-radius4;

  &--type-warning {
    background: $supplement-warning-bg-color;
  }

  &__Title,
  &__Icon {
    margin-bottom: $scale8;
    font-size: $font-size-092rem;
    font-weight: $font-weight-700;
    svg {
      width: $font-size-092rem;
      height: $font-size-092rem;
      vertical-align: text-bottom;
      fill: $text;
    }
  }

  // &__Description{
  // }
}
</style>
