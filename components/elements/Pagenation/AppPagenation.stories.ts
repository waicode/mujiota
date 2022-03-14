import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { TAG_PROPERTIES } from '~/plugins/taxonomy'
import { Article } from '~/store'
import AppPagenation from './AppPagenation.vue'

const meta = defineMeta({
  title: '@elements/Pagenation/AppPagenation',
  component: AppPagenation,
  argTypes: {
    articles: { control: { type: 'object' } },
    pageSize: { control: { type: 'number' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppPagenation },
    props: Object.keys(argTypes),
    setup() {},
    template: `
    <app-pagenation
      :articles="articles"
      :page-size="pageSize"
      @change-page="displayPage"
    />
    `,
  })

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
  articles: sampleArticles,
  pageSize: 5,
}
