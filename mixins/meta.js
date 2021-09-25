export default {
  data() {
    return {
      meta: {},
    }
  },
  head() {
    if (!Object.keys(this.meta).length) {
      // metaが空の場合は読み込む
      this.meta = this.$getMeta()
    }
    const title =
      !this.meta.title || this.meta.title === this.meta.siteName
        ? this.meta.siteName
        : `${this.meta.title} - ${this.meta.siteName}`
    return {
      titleTemplate: '',
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.meta.siteName,
        },
        { hid: 'og:type', property: 'og:type', content: this.meta.ogType },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        { hid: 'og:url', property: 'og:url', content: this.meta.pageUrl },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.ogImageUrl,
        },
        {
          hid: 'og:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'og:site',
          name: 'twitter:site',
          content: this.meta.twitterUserName,
        },
        {
          hid: 'og:creator',
          name: 'twitter:creator',
          content: this.meta.twitterUserName,
        },
      ],
    }
  },
}
