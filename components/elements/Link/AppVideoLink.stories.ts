import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppVideoLink from './AppVideoLink.vue'

const meta = defineMeta({
  title: '@elements/Link/AppVideoLink',
  component: AppVideoLink,
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppVideoLink },
    props: Object.keys(argTypes),
    setup() {
      return args
    },
    template: `
      <app-video-link :id="id" :background-color="backgroundColor"></app-video-link>
    `,
  })

export const Primary = Template.bind({})
Primary.args = {
  id: '4YjLMdx3YZY',
  backgroundColor: '#fff',
}
