export default (metaData) => {
  const title =
    !metaData.title || metaData.title === metaData.siteName
      ? metaData.siteName
      : `${metaData.title} - ${metaData.siteName}`

  return {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: metaData.description,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: metaData.siteName,
      },
      { hid: 'og:type', property: 'og:type', content: metaData.ogType },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: metaData.description,
      },
      { hid: 'og:url', property: 'og:url', content: metaData.pageUrl },
      {
        hid: 'og:image',
        property: 'og:image',
        content: metaData.ogImageUrl,
      },
      {
        hid: 'og:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:site',
        name: 'twitter:site',
        content: metaData.twitterUserName,
      },
      {
        hid: 'og:creator',
        name: 'twitter:creator',
        content: metaData.twitterUserName,
      },
    ],
  }
}
