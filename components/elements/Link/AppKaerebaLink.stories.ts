import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import { EC_MALL_ASP_TYPE } from './AppKaerebaLinkComposable'
import AppKaerebaLink from './AppKaerebaLink.vue'

const meta = defineMeta({
  title: '@elements/Link/AppKaerebaLink',
  component: AppKaerebaLink,
  argTypes: {
    itemTitle: { control: { type: 'text' } },
    imgFileName: { control: { type: 'text' } },
    shopName: { control: { type: 'text' } },
    amazonItemId: { control: { type: 'text' } },
    rakutenItemId: { control: { type: 'text' } },
    searchKeyword: { control: { type: 'text' } },
    mainAspType: {
      control: { type: 'inline-radio' },
      options: Object.values(EC_MALL_ASP_TYPE),
    },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppKaerebaLink },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-kaereba-link
        :item-title="itemTitle"
        :img-file-name="imgFileName"
        :shop-name="shopName"
        :amazon-item-id="amazonItemId"
        :rakuten-item-id="rakutenItemId"
        :search-keyword="searchKeyword">
      </app-kaereba-link>
    `,
  })

export const Primary = Template.bind({})
Primary.args = {
  itemTitle: 'DeLonghi kMix ドリップコーヒーメーカー ホワイト CMB6-WH',
  imgFileName: 'kmix_coffee_maker_500x500.png',
  shopName: 'DeLonghi',
  amazonItemId: 'B00243GLUY',
  rakutenItemId: '8965772ec67b8f5533146eda69344ed1',
  searchKeyword: 'kMix ドリップコーヒーメーカー ホワイト',
}
