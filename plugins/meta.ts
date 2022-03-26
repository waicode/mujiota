// デフォルトのメタデータ

export type Meta = {
  title: string
  siteName: string
  description: string
  baseUrl: string
  pageUrl: string
  ogType: string
  ogImageUrl: string
  twitterUserName: string
}

const metaDefault: Meta = {
  title: 'mujiota.com',
  siteName: 'mujiota.com',
  description:
    'MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  pageUrl: 'https://mujiota.com',
  ogType: 'blog',
  ogImageUrl: 'https://mujiota.com/logo/mujiota-og.png',
  twitterUserName: '@waicode37',
}

const getMeta = (
  title?: string,
  description?: string,
  pageUrl?: string,
  ogImageUrl?: string
) => {
  const meta = metaDefault
  // 各ページでデフォルト以外の値は上書き必須
  if (title) meta.title = title
  if (description) meta.description = description
  if (pageUrl) meta.pageUrl = pageUrl
  if (ogImageUrl) meta.ogImageUrl = ogImageUrl
  return meta
}

export default (_: unknown, inject: any) => {
  inject('getMeta', getMeta)
}
