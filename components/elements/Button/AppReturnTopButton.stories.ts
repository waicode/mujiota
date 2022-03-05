import type { Story } from '@storybook/vue'
import { defineMeta } from '@/stories/helpers'
import { defineComponent } from '@nuxtjs/composition-api'
import AppReturnTopButton from './AppReturnTopButton.vue'

const meta = defineMeta({
  title: '@elements/Button/AppReturnTopButton',
  component: AppReturnTopButton,
  argTypes: {
    showTop: { control: { type: 'number' } },
    forcedDisplay: { control: { type: 'boolean' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppReturnTopButton },
    props: Object.keys(argTypes),
    setup() {},
    template: `<AppReturnTopButton :show-top="showTop" :forced-display="forcedDisplay" />`,
  })

export const Primary = Template.bind({})
Primary.args = {
  showTop: 0,
  forcedDisplay: true,
}
