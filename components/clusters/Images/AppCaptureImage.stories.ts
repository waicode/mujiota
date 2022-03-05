import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppCaptureImage from './AppCaptureImage.vue'

const meta = defineMeta({
  title: '@clusters/Images/AppCaptureImage',
  component: AppCaptureImage,
  argTypes: {
    articleId: { control: { type: 'text' } },
    imgFileName: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    caption: { control: { type: 'text' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppCaptureImage },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-capture-image
        :article-id="articleId"
        :img-file-name="imgFileName"
        :alt="alt"
        :caption="caption"
      ></app-capture-image>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  articleId: '353',
  imgFileName: '20110927_seirogan_iroiro.jpg',
  alt: 'いろいろなマークの正露丸',
  caption: 'いろいろなマークの正露丸',
}
