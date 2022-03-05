import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppAssetsImage from './AppAssetsImage.vue'

const meta = defineMeta({
  title: '@elements/Image/AppAssetsImage',
  component: AppAssetsImage,
  argTypes: {
    path: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppAssetsImage },
    props: Object.keys(argTypes),
    setup() {},
    template: `<app-assets-image :path="path"></app-assets-image>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  path: 'images/eyecatch/5/saisyo.png',
}
