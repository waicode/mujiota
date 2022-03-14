import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppShareButtonsTop from './AppShareButtonsTop.vue'

const meta = defineMeta({
  title: '@clusters/ButtonGroup/AppShareButtonsTop',
  component: AppShareButtonsTop,
  argTypes: {
    pageUrl: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    shareCountHatena: { control: { type: 'number' } },
    shareCountTwitter: { control: { type: 'number' } },
    shareCountFacebook: { control: { type: 'number' } },
    shareCountPocket: { control: { type: 'number' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppShareButtonsTop },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-share-buttons-top
        :page-url="pageUrl"
        :title="title"
        :share-count-hatena="shareCountHatena"
        :share-count-twitter="shareCountTwitter"
        :share-count-facebook="shareCountFacebook"
        :share-count-pocket="shareCountPocket"
      ></app-share-buttons-top>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  pageUrl: 'https://mujiota.com/1372/bulletproof-coffee',
  title: '完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方',
  shareCountHatena: 0,
  shareCountTwitter: 0,
  shareCountFacebook: 0,
  shareCountPocket: 0,
}
