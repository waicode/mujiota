import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppPhotoImage from './AppPhotoImage.vue'

const meta = defineMeta({
  title: '@clusters/Images/AppPhotoImage',
  component: AppPhotoImage,
  argTypes: {
    articleId: { control: { type: 'text' } },
    imgFileName: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    caption: { control: { type: 'text' } },
    backgroundColor: { control: { type: 'color' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppPhotoImage },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-photo-image
        :article-id="articleId"
        :img-file-name="imgFileName"
        :alt="alt"
        :caption="caption"
        :background-color="backgroundColor"
      ></app-photo-image>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  articleId: '149',
  imgFileName: 'mamehiko_coffee_grgr.jpg',
  alt: 'マメヒコの春煎りコーヒー（ぐるぐにゃ）',
  caption: 'マメヒコの春煎りコーヒー（ぐるぐにゃ）',
  backgroundColor: '#fff',
}
