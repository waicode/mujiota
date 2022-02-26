import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { Tag } from '~/store'
import AppTagDropdown from './AppTagDropdown.vue'

const meta = defineMeta({
  title: '@elements/Dropdown/AppTagDropdown',
  component: AppTagDropdown,
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppTagDropdown },
    props: Object.keys(argTypes),
    setup() {
      return args
    },
    template: `<app-tag-dropdown :label="label" :tags="tags" />`,
  })

export const Primary = Template.bind({})

const sampleTags: Tag[] = [
  { name: '健康', count: '7' },
  { name: 'コーヒー', count: '8' },
  { name: '雑記', count: '58' },
]

Primary.args = {
  label: 'タグを選択',
  tags: sampleTags,
}
