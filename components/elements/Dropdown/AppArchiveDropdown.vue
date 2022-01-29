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

export default defineComponent({
  name: 'AppArchiveDropdown',
  props: {
    label: {
      type: String,
      required: true,
    },
    archives: {
      type: Array as PropType<Array<string>>,
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
