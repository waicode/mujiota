import type { Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import { defineMeta } from '@/stories/helpers'
import AppNavbar from './AppNavbar.vue'

const meta = defineMeta({
  title: '@clusters/Parts/AppNavbar',
  component: AppNavbar,
  argTypes: {
    logoHideTop: { control: { type: 'number' } },
    menuButtonHideTop: { control: { type: 'number' } },
  },
})
export default meta

const Template: Story = (args, { argTypes }) =>
  defineComponent({
    components: { AppNavbar },
    props: Object.keys(argTypes),
    setup() {},
    template: `
      <app-navbar
      :logo-hide-top="logoHideTop" :menu-button-hide-top="menuButtonHideTop"
      ></app-navbar>`,
  })

export const Primary = Template.bind({})
Primary.args = {
  logoHidetop: 80,
  menuButtonHideTop: 83,
}
