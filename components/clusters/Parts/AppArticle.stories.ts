import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { Article } from '~/store'
import { TAG_PROPERTIES } from '~/plugins/taxonomy'
import AppArticle from './AppArticle.vue'

const meta = defineMeta({
  title: '@clusters/Parts/AppArticle',
  component: AppArticle,
  argTypes: {
    article: { control: { type: 'object' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppArticle },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-article
        :article="article"
      ></app-article>`,
  })

const sampleArticle: Article = {
  id: 1372,
  slug: 'bulletproof-coffee',
  title: '完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方',
  description:
    '朝は大の苦手だったのに、完全無欠コーヒーを飲むようになってからは午前中から集中して仕事に取り組めるようになりました。完全無欠コーヒーの効果や作り方を、長年の経験にもとづいて誰よりも詳しく書いたつもりです。',
  createdAt: '2017-05-06T18:36:20.000Z',
  updatedAt: '2021-07-25T09:49:35.000Z',
  imageFormat: 'jpeg',
  category: TAG_PROPERTIES.trdr.name,
  tags: [TAG_PROPERTIES.health.name, TAG_PROPERTIES.coffee.name],
}
export const Primary = Template.bind({})
Primary.args = {
  article: sampleArticle,
}
