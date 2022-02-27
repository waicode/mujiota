import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppYomerebaLink, { BOOK_ASP_TYPE } from './AppYomerebaLink.vue'

const meta = defineMeta({
  title: '@elements/Link/AppYomerebaLink',
  component: AppYomerebaLink,
  argTypes: {
    itemTitle: { control: { type: 'text' } },
    imgFileName: { control: { type: 'text' } },
    authorName: { control: { type: 'text' } },
    amazonItemId: { control: { type: 'text' } },
    kindleItemId: { control: { type: 'text' } },
    rakutenItemId: { control: { type: 'text' } },
    koboItemId: { control: { type: 'text' } },
    mainAspType: {
      control: { type: 'inline-radio' },
      options: Object.values(BOOK_ASP_TYPE),
    },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppYomerebaLink },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-yomereba-link
        :item-title="itemTitle"
        :img-file-name="imgFileName"
        :author-name="authorName"
        :amazon-item-id="amazonItemId"
        :kindle-item-id="kindleItemId"
        :rakuten-item-id="rakutenItemId"
        :kobo-item-id="koboItemId">
      </app-yomereba-link>
    `,
  })

export const Primary = Template.bind({})
Primary.args = {
  itemTitle: 'シリコンバレー式 自分を変える最強の食事',
  imgFileName: 'bfp_diet_500x500.png',
  authorName: 'デイヴ・アスプリー',
  amazonItemId: '4478039674',
  kindleItemId: 'B015S5545W',
  rakutenItemId: '13354097',
  koboItemId: '60f7b9a3c1723b328b923f2e27736eb8',
}
