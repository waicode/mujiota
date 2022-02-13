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
        v-for="archive in archives"
        :key="archive.month"
        has-link
        aria-role="menuitem"
      >
        <nuxt-link :to="dateLink(archive)">{{ dateText(archive) }}</nuxt-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { bemx } from '~/composables/util'
import { Archive } from '~/store'

/**
 * ## アーカイブ用ドロップダウン
 *
 * 年月単位の過去記事（アーカイブ）を表示するドロップダウン。
 * ドロップダウン未選択時に表示するラベルと中身のアーカイブ情報リストを受け取る。
 * リスト項目を選択すると該当年月のアーカイブページへ遷移する。
 */
export default defineComponent({
  name: 'AppArchiveDropdown',
  props: {
    /**
     * 未選択時の表示ラベル。
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * アーカイブ情報（Archive）のリスト。
     */
    archives: {
      type: Array as PropType<Array<Archive>>,
      required: true,
    },
  },
  setup() {
    const dateLink = (archive: Archive) =>
      `/date/${archive.month.slice(0, 4)}/${archive.month.slice(5, 7)}`
    const dateText = (archive: Archive) =>
      `${archive.month.slice(0, 4)}年${archive.month.slice(5, 7)}月(${
        archive.count
      })`

    const className = bemx('AppArchiveDropdown')
    return {
      className,
      dateLink,
      dateText,
    }
  },
})
</script>
<style lang="scss">
.AppArchiveDropdown {
  margin-bottom: $scale20;
}
</style>
