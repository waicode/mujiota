import { defineMeta } from '@/stories/helpers'
import AppTagDropdown from './AppTagDropdown.vue'

export default defineMeta({
  title: 'components/elements/Dropdown/AppTagDropdown',
  component: AppTagDropdown,
  argTypes: {},
})

export const Primary = () => ({
  template: `<AppTagDropdown :show-top="0" :archives="[]" />`,
})
