const meta = {
  title: null,
  siteName: 'mujiota.com',
  description:
    'MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  pageUrl: '/',
  ogType: 'blog',
  ogImageUrl: 'https://mujiota.com/logo/mujiota-logo@2x.png',
  twitterUserName: '@waicode37',
}

const getMeta = () => {
  return meta
}
export default (_, inject) => {
  inject('getMeta', getMeta)
}
