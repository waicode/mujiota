// デフォルトのメタデータ

export type Meta = {
  title: string
  description: string
  pageUrl: string
  ogImageUrl: string
  siteName: string
  baseUrl: string
  ogType: string
  twitterUserName: string
}

export const DEFAULT_OG_IMAGE_URL = `${process.env.BASE_URL}/logo/mujiota-og.png`

const metaDefault: Meta = {
  title: '',
  description: '',
  pageUrl: '',
  ogImageUrl: '',
  siteName: 'mujiota.com',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  ogType: 'blog',
  twitterUserName: '@waicode37',
}

const getMeta = (
  title: string,
  description: string,
  pageUrl: string,
  ogImageUrl: string
) => {
  const meta = metaDefault
  // 各ページで上書き必須
  meta.title = title
  meta.description = description
  meta.pageUrl = pageUrl
  meta.ogImageUrl = ogImageUrl
  return meta
}

export default (_: unknown, inject: any) => {
  inject('getMeta', getMeta)
}
