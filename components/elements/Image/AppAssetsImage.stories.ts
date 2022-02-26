import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppAssetsImage from './AppAssetsImage.vue'

const meta = defineMeta({
  title: '@elements/Image/AppAssetsImage',
  component: AppAssetsImage,
})
export default meta

const Template: Story = (args) =>
  defineComponent({
    components: { AppAssetsImage },
    setup() {
      return args
    },
    template: `<app-assets-image :path="path" />`,
  })

export const Primary = Template.bind({})
Primary.args = {
  path: 'images/eyecatch/5/saisyo.png',
}
