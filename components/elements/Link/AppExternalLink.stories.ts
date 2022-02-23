import AppExternalLink from './AppExternalLink.vue'

export default {
  title: 'components/elements/Link/AppExternalLink',
  component: AppExternalLink,
  argTypes: {},
}

export const Primary = () => ({
  template: `
    <app-external-link
      title='Appbank'
      note="MOJILOGO: 1文字ロゴをかんたんに作れるアプリ。無料。"
      link="http://www.appbank.net/2013/02/06/iphone-application/539593.php"
      img-file-name="appbank.png"
    />
  `,
})
