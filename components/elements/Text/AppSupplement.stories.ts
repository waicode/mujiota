import { defineMeta } from '@/stories/helpers'
import AppSupplement from './AppSupplement.vue'

export default defineMeta({
  title: '@components/elements/Text/AppSupplement',
  component: AppSupplement,
  argTypes: {},
})

export const Primary = () => ({
  template: `
    <app-supplement type="normal" title="無印良品のOEM供給って何？" >OEMとは「Original Equipment Manufacturer」の略称です。他社が商品を製造し、それを無印良品のブランドとして発売しています。</app-supplement>
  `,
})
