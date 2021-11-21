export default (meta) => {
  const title =
    !meta.title || meta.title === meta.siteName
      ? meta.siteName
      : `${meta.title} - ${meta.siteName}`
  return {
    titleTemplate: '',
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: meta.description,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: meta.siteName,
      },
      { hid: 'og:type', property: 'og:type', content: meta.ogType },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: meta.description,
      },
      { hid: 'og:url', property: 'og:url', content: meta.pageUrl },
      {
        hid: 'og:image',
        property: 'og:image',
        content: meta.ogImageUrl,
      },
      {
        hid: 'og:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:site',
        name: 'twitter:site',
        content: meta.twitterUserName,
      },
      {
        hid: 'og:creator',
        name: 'twitter:creator',
        content: meta.twitterUserName,
      },
    ],
  }
}
