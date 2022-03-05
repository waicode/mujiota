import type { Story } from '@storybook/vue'
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { TAG_PROPERTIES } from '~/plugins/taxonomy'
import { Article } from '~/store'
import AppSideBarRecommendAd from './AppSideBarRecommendAd.vue'

const meta = defineMeta({
  title: '@clusters/Ads/AppSideBarRecommendAd',
  component: AppSideBarRecommendAd,
  argTypes: {},
})
export default meta

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

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppSideBarRecommendAd },
    props: Object.keys(argTypes),
    setup() {
      const { app } = useContext()
      app.$accessor.setArticle({ article: sampleArticle })
    },
    template: `<app-side-bar-recommend-ad />`,
  })

export const Primary = Template.bind({})
