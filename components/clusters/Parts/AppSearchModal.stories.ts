import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppSearchModal from './AppSearchModal.vue'

const meta = defineMeta({
  title: '@clusters/Parts/AppSearchModal',
  component: AppSearchModal,
  argTypes: {
    isActive: { control: { type: 'boolean' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppSearchModal },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <div>
        <button @click="isActive = true">検索モーダルを開く</button>
        <app-search-modal
          :is-active="isActive"
          @close="isActive = false"
        ></app-search-modal>
      </div>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  isActive: true,
}
