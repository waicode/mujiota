import AppReturnTopButton from './AppReturnTopButton.vue'

export default {
  title: 'components/elements/Button/AppReturnTopButton',
  component: AppReturnTopButton,
  argTypes: {},
}

export const Primary = () => ({
  template: `<AppReturnTopButton :label="テスト" />`,
})
