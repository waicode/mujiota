import AppKaerebaLink from './AppKaerebaLink.vue'

export default {
  title: 'components/elements/Link/AppKaerebaLink',
  component: AppKaerebaLink,
  argTypes: {},
}

export const Primary = () => ({
  template: `
    <app-kaereba-link
      item-title="DeLonghi kMix ドリップコーヒーメーカー ホワイト CMB6-WH"
      img-file-name="kmix_coffee_maker_500x500.png"
      shop-name="DeLonghi" amazon-item-id="B00243GLUY"
      rakuten-item-id="8965772ec67b8f5533146eda69344ed1"
      search-keyword="kMix ドリップコーヒーメーカー ホワイト">
    </app-kaereba-link>
  `,
})
