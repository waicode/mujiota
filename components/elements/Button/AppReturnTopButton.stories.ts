import type { Story } from '@storybook/vue'
import { defineMeta } from '@/stories/helpers'
import { defineComponent } from '@nuxtjs/composition-api'
import AppReturnTopButton from './AppReturnTopButton.vue'

const meta = defineMeta({
  title: '@elements/Button/AppReturnTopButton',
  component: AppReturnTopButton,
})
export default meta

const Template: Story = (args) =>
  defineComponent({
    components: { AppReturnTopButton },
    setup() {
      return args
    },
    template: `<AppReturnTopButton :show-top="showTop" forced-display="forcedDisplay" />`,
  })

export const Primary = Template.bind({})
Primary.args = {
  showTop: 0,
  forcedDisplay: true,
}
