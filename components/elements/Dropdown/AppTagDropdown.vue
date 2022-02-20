<template>
  <div :class="className">
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
        <b-button
          :label="label"
          :icon-right="active ? 'menu-up' : 'menu-down'"
        />
      </template>
      <b-dropdown-item
        v-for="tag in tags"
        :key="tag.name"
        has-link
        aria-role="menuitem"
      >
        <nuxt-link :to="tagLink(tag)">{{ tagText(tag) }}</nuxt-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, useContext } from '@nuxtjs/composition-api'
import { bemx } from '~/composables/util'
import { Tag } from '~/store'

/**
 * ## タグページ用ドロップダウン
 *
 * タグページを表示するドロップダウン。
 * ドロップダウン未選択時に表示するラベルと中身のタグ情報リストを受け取る。
 * リスト項目を選択すると該当のタグページへ遷移する。
 */
export default defineComponent({
  name: 'AppTagDropdown',
  props: {
    /**
     * 未選択時の表示ラベル。
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * タグ情報（Tag）のリスト。
     */
    tags: {
      type: Array as PropType<Array<Tag>>,
      required: true,
    },
  },
  setup() {
    const { app } = useContext()
    const tagLink = (tag: Tag) => `/tag/${app.$getTagSlug(tag.name)}`
    const tagText = (tag: Tag) => `${tag.name}(${tag.count})`
    const className = bemx('AppTagDropdown')
    return {
      className,
      tagLink,
      tagText,
    }
  },
})
</script>
<style lang="scss">
.AppTagDropdown {
  margin-bottom: $scale20;
  .dropdown {
    width: 100%;
    .dropdown-text {
      font-size: $font-size-081rem;
      font-weight: $font-weight-700;
      color: $text-gray-color;
    }
    svg.fa-angle-down {
      color: $gray-color;
    }
    .dropdown-trigger,
    .dropdown-menu,
    button {
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
