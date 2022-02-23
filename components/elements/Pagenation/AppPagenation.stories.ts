import { defineMeta } from '@/stories/helpers'
import AppPagenation from './AppPagenation.vue'

export default defineMeta({
  title: '@components/elements/Pagenation/AppPagenation',
  component: AppPagenation,
  argTypes: {},
})

export const Primary = () => ({
  template: `
  <AppPagenation
    :articles="articles"
    :page-size="pageSize"
    @change-page="displayPage"
  />
  `,
})
