import { defineMeta } from '@/stories/helpers'
import AppVideoLink from './AppVideoLink.vue'

export default defineMeta({
  title: 'components/elements/Link/AppVideoLink',
  component: AppVideoLink,
  argTypes: {},
})

export const Primary = () => ({
  template: `
    <app-yomereba-link
      item-title="シリコンバレー式 自分を変える最強の食事"
      img-file-name="bfp_diet_500x500.png"
      author-name="デイヴ・アスプリー"
      amazon-item-id="4478039674"
      kindle-item-id="B015S5545W"
      rakuten-item-id="13354097"
      kobo-item-id="60f7b9a3c1723b328b923f2e27736eb8"
    ></app-yomereba-link>
  `,
})
