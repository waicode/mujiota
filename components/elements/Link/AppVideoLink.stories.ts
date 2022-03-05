import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppVideoLink from './AppVideoLink.vue'

const meta = defineMeta({
  title: '@elements/Link/AppVideoLink',
  component: AppVideoLink,
  argTypes: {
    id: { control: { type: 'text' } },
    backgroundColor: { control: { type: 'color' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppVideoLink },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-video-link :id="id" :background-color="backgroundColor"></app-video-link>
    `,
  })

export const Primary = Template.bind({})
Primary.args = {
  id: '4YjLMdx3YZY',
  backgroundColor: '#fff',
}
