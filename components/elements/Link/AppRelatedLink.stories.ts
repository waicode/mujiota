import { defineMeta } from '@/stories/helpers'
import AppRelatedLink from './AppRelatedLink.vue'

export default defineMeta({
  title: 'components/elements/Link/AppRelatedLink',
  component: AppRelatedLink,
  argTypes: {},
})

export const Primary = () => ({
  template: `
    <app-related-link id="1278"></app-related-link>
  `,
})
