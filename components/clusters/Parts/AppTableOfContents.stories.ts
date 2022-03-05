import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { Article } from '~/store'
import { TAG_PROPERTIES } from '~/plugins/taxonomy'
import AppTableOfContents from './AppTableOfContents.vue'

const meta = defineMeta({
  title: '@clusters/Parts/AppTableOfContents',
  component: AppTableOfContents,
  argTypes: {
    article: { control: { type: 'object' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppTableOfContents },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-table-of-contents
        :article="article"
      ></app-table-of-contents>`,
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
  toc: [
    {
      id: 'ダイエットもできて集中力もアップする魔法のコーヒー',
      depth: 2,
      text: 'ダイエットもできて集中力もアップする魔法のコーヒー！？',
    },
    {
      id: '飲み始めたきっかけは友人の口コミ',
      depth: 2,
      text: '飲み始めたきっかけは友人の口コミ',
    },
    {
      id: '完全無欠コーヒーのことは１冊の本に全て書いてある',
      depth: 2,
      text: '完全無欠コーヒーのことは１冊の本に全て書いてある',
    },
    {
      id: 'シリコンバレー式-最高の食事の要点を30秒でつかむ',
      depth: 3,
      text: '「シリコンバレー式 最高の食事」の要点を30秒でつかむ',
    },
    {
      id: '良質な脂肪と油がパフォーマンスを激的に上げる',
      depth: 3,
      text: '良質な脂肪と油がパフォーマンスを激的に上げる',
    },
    {
      id: '副次的効果でお通じも良くなる',
      depth: 3,
      text: '副次的効果で「お通じ」も良くなる',
    },
    {
      id: 'シリコンバレー式のバターコーヒーはコストがかかりすぎる',
      depth: 2,
      text: 'シリコンバレー式のバターコーヒーはコストがかかりすぎる',
    },
    {
      id: 'スーパーやネットで買える安い食材でも完全無欠コーヒーは作れる',
      depth: 2,
      text: 'スーパーやネットで買える安い食材でも完全無欠コーヒーは作れる',
    },
    {
      id: 'おすすめの食材編',
      depth: 3,
      text: 'おすすめの食材編',
    },
    {
      id: 'おすすめのアイテム編',
      depth: 3,
      text: 'おすすめのアイテム編',
    },
    {
      id: '完全無欠コーヒーバターコーヒーの作り方',
      depth: 2,
      text: '完全無欠コーヒー（バターコーヒー）の作り方',
    },
    {
      id: 'バターとmctオイルをいれる',
      depth: 3,
      text: 'バターとMCTオイルをいれる',
    },
    {
      id: 'コーヒーをいれる',
      depth: 3,
      text: 'コーヒーをいれる',
    },
    {
      id: 'ブレンダーでまぜる',
      depth: 3,
      text: 'ブレンダーでまぜる',
    },
    {
      id: '好みで再加熱して完成',
      depth: 3,
      text: '好みで再加熱して完成',
    },
    {
      id: 'バターコーヒーおすすめのアレンジレシピ',
      depth: 2,
      text: 'バターコーヒーおすすめのアレンジレシピ',
    },
    {
      id: '三日坊主な性格でもコーヒー好きなら継続できる',
      depth: 2,
      text: '三日坊主な性格でも、コーヒー好きなら継続できる',
    },
  ],
}
export const Primary = Template.bind({})
Primary.args = {
  article: sampleArticle,
}
