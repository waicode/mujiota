import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppExternalLink from './AppExternalLink.vue'

const meta = defineMeta({
  title: '@elements/Link/AppExternalLink',
  component: AppExternalLink,
  argTypes: {
    title: { control: { type: 'text' } },
    note: { control: { type: 'text' } },
    link: { control: { type: 'text' } },
    imgFileName: { control: { type: 'text' } },
    aspMeasurementImgLink: { control: { type: 'text' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppExternalLink },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-external-link
        :title="title"
        :note="note"
        :link="link"
        :img-file-name="imgFileName"
      ></app-external-link>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  title: 'Appbank',
  note: 'MOJILOGO: 1文字ロゴをかんたんに作れるアプリ。無料。',
  link: 'http://www.appbank.net/2013/02/06/iphone-application/539593.php',
  imgFileName: 'appbank.png',
}
