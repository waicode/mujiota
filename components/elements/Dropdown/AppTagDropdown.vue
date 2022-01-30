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

export default defineComponent({
  name: 'AppTagDropdown',
  props: {
    label: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
  },
  setup() {
    const { app } = useContext()
    const tagLink = (tag: Tag) => `/tag/${app.$getTagSlug(tag.name)}`
    const tagText = (tag: Tag) => `${tag.name}(${tag.count})`
    const className = bemx('AppLinkDropdown')
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
}
</style>
