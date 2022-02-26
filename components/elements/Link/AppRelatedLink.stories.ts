import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppRelatedLink from './AppRelatedLink.vue'

const meta = defineMeta({
  title: '@elements/Link/AppRelatedLink',
  component: AppRelatedLink,
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppRelatedLink },
    props: Object.keys(argTypes),
    setup() {
      return args
    },
    template: `
      <app-related-link :id="id"></app-related-link>
    `,
  })

export const Primary = Template.bind({})
Primary.args = {
  id: '1278',
}
