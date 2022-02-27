import type { Story } from '@storybook/vue'
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppSupplement, { SUPPLEMENT_TYPE } from './AppSupplement.vue'

const meta = defineMeta({
  title: '@elements/Text/AppSupplement',
  component: AppSupplement,
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: Object.values(SUPPLEMENT_TYPE),
    },
    title: { control: { type: 'text' } },
    default: { control: { type: 'text' } },
  },
} as const)
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppSupplement },
    props: Object.keys(argTypes),
    setup(props) {
      const defaultValue = computed(() => props.default)
      return {
        defaultValue,
      }
    },
    template: `
      <app-supplement :type="type" :title="title" >{{ defaultValue }}</app-supplement>
    `,
  })

export const Primary = Template.bind({})
Primary.args = {
  type: SUPPLEMENT_TYPE.NORMAL,
  title: '無印良品のOEM供給って何？',
  default:
    'OEMとは「Original Equipment Manufacturer」の略称です。他社が商品を製造し、それを無印良品のブランドとして発売しています。',
}
