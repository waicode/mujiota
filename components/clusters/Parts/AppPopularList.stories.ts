import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { Article } from '~/store'
import { TAG_PROPERTIES } from '~/plugins/taxonomy'
import AppPopularList from './AppPopularList.vue'

const meta = defineMeta({
  title: '@clusters/Parts/AppPopularList',
  component: AppPopularList,
  argTypes: {
    popularArticles: { control: { type: 'object' } },
    articles: { control: { type: 'object' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppPopularList },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-popular-list
        :popular-articles="popularArticles" :articles="articles"
      ></app-popular-list>`,
  })

const samplePopularArticles = [
  {
    rank: 1,
    data: {
      post_id: 1,
      post_slug: 'test1',
    },
  },
  {
    rank: 2,
    data: {
      post_id: 3,
      post_slug: 'test3',
    },
  },
  {
    rank: 3,
    data: {
      post_id: 5,
      post_slug: 'test5',
    },
  },
  {
    rank: 4,
    data: {
      post_id: 7,
      post_slug: 'test7',
    },
  },
  {
    rank: 5,
    data: {
      post_id: 9,
      post_slug: 'test9',
    },
  },
]

const sampleArticles: Article[] = []
// eslint-disable-next-line no-plusplus
for (let i = 1; i < 20; i++) {
  sampleArticles.push({
    id: i,
    slug: `test${i}`,
    title: `テストタイトル${i}`,
    description: `テスト説明${i}`,
    createdAt: '2021-07-25T09:49:35.000Z',
    updatedAt: '2021-07-25T09:49:35.000Z',
    imageFormat: 'png',
    category: TAG_PROPERTIES.trdr.name,
    tags: [TAG_PROPERTIES.trdr.name, TAG_PROPERTIES.plant.name],
  })
}
export const Primary = Template.bind({})
Primary.args = {
  popularArticles: samplePopularArticles,
  articles: sampleArticles,
}
