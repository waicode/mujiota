import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { Article } from '~/store'
import { TAG_PROPERTIES } from '~/plugins/taxonomy'
import AppRelatedPosts from './AppRelatedPosts.vue'

const meta = defineMeta({
  title: '@clusters/Parts/AppRelatedPosts',
  component: AppRelatedPosts,
  argTypes: {
    articles: { control: { type: 'object' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppRelatedPosts },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-related-posts
        :articles="articles"
      ></app-related-posts>`,
  })

const sampleArticle1: Article = {
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
const sampleArticle2: Article = {
  id: 1352,
  slug: 'furusato-nouzei',
  title:
    'ふるさと納税「さとふる」なら初心者でも迷わない設計で想像以上にお得でした',
  description:
    'CMでもお馴染みのふるさと納税ポータルサイトの「さとふる」を使ってみたら、はじめての人でも迷わない設計で、想像以上にお得で便利でした。',
  createdAt: '2017-01-01T18:04:29.000Z',
  updatedAt: '2019-10-13T06:16:35.000Z',
  imageFormat: 'jpeg',
  category: TAG_PROPERTIES.lifehack.name,
  tags: [TAG_PROPERTIES.lifehack.name],
}

const sampleArticle3: Article = {
  id: 1300,
  slug: 'mercari47980',
  title: 'むかし4万円で手に入れたテレビがメルカリで47,800円で売れた話',
  description:
    '最近の不用品売買は「フリマアプリ」一色。その流行りに乗ってっみたら、買い替え対象や不要となった生活家電が、ここまで高く売れるとは。正直、驚きました。',
  createdAt: '2017-01-01T18:04:29.000Z',
  updatedAt: '2019-10-13T06:16:35.000Z',
  imageFormat: 'jpg',
  category: TAG_PROPERTIES.lifehack.name,
  tags: [TAG_PROPERTIES.lifehack.name],
}

export const Primary = Template.bind({})
Primary.args = {
  articles: [sampleArticle1, sampleArticle2, sampleArticle3],
}
