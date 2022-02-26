import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { Archive } from '~/store'
import AppArchiveDropdown from './AppArchiveDropdown.vue'

const meta = defineMeta({
  title: '@elements/Dropdown/AppArchiveDropdown',
  component: AppArchiveDropdown,
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppArchiveDropdown },
    props: Object.keys(argTypes),
    setup() {
      return args
    },
    template: `<app-archive-dropdown :label="label" :archives="archives" />`,
  })

export const Primary = Template.bind({})

const sampleArchives: Archive[] = [
  { month: '2010-09', count: '1' },
  { month: '2011-03', count: '11' },
  { month: '2011-04', count: '17' },
]

Primary.args = {
  label: '月を選択',
  archives: sampleArchives,
}
