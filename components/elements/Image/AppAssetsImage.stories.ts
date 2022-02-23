import { defineMeta } from '@/stories/helpers'
import AppAssetsImage from './AppAssetsImage.vue'

export default defineMeta({
  title: 'components/elements/Image/AppAssetsImage',
  component: AppAssetsImage,
  argTypes: {},
})

export const Primary = () => ({
  template: `<AppAssetsImage path="images/eyecatch/5/saisyo.png" />`,
})
