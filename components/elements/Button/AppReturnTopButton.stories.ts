import { defineMeta } from '@/stories/helpers'
import { defineComponent } from '@nuxtjs/composition-api'
import AppReturnTopButton from './AppReturnTopButton.vue'

const meta = defineMeta({
  title: 'components/elements/Button/AppReturnTopButton',
  component: AppReturnTopButton,
  argTypes: {
    showTop: { control: 'number' },
  },
})
export default meta

const Template = (args: any) =>
  defineComponent({
    components: { AppReturnTopButton },
    setup() {
      return args
    },
    template: `<AppReturnTopButton :show-top="${args.showTop}"/>`,
  })

export const Primary = Template.bind({})
// Primary.args = {
//   showTop: 100,
// }
