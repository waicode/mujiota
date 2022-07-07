// デフォルトのメタデータ

export type Meta = {
  title: string
  description: string
  pageUrl: string
  ogImageUrl: string
  siteName: string
  ogType: string
  twitterUserName: string
}

export const getDefaultOgImageUrl = (baseUrl: string) =>
  `${baseUrl}/logo/mujiota-og.png`

const metaDefault: Meta = {
  title: '',
  description: '',
  pageUrl: '',
  ogImageUrl: '',
  siteName: 'mujiota.com',
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
