import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppArchiveDropdown from './AppArchiveDropdown.vue'

const meta = defineMeta({
  title: 'components/elements/Dropdown/AppArchiveDropdown',
  component: AppArchiveDropdown,
  argTypes: {
    label: { control: 'text' },
  },
} as const)
export default meta

const Template: Story = (args) =>
  defineComponent({
    components: { AppArchiveDropdown },
    setup() {
      return args
    },
    template: `<AppArchiveDropdown :label="label" :archives="[]" />`,
  })

export const Primary = Template.bind({})
Primary.args = {
  label: 'テスト',
}
