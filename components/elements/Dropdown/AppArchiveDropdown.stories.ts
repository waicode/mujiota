import AppArchiveDropdown from './AppArchiveDropdown.vue'

export default {
  title: 'components/elements/Dropdown/AppArchiveDropdown',
  component: AppArchiveDropdown,
  argTypes: {},
}

export const Primary = () => ({
  template: `<AppArchiveDropdown :show-top="0" :archives="[]" />`,
})
