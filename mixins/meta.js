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
    const title = this.meta.title
      ? `${this.meta.title} - ${this.meta.siteName}`
      : this.meta.siteName
    return {
      titleTemplate: '',
      title,
      meta: [
        { name: 'description', content: this.meta.description },
        { property: 'og:site_name', content: this.meta.siteName },
        { property: 'og:type', content: this.meta.ogType },
        { property: 'og:title', content: title },
        { property: 'og:description', content: this.meta.description },
        { property: 'og:url', content: this.meta.pageUrl },
        {
          property: 'og:image',
          content: this.meta.ogImageUrl,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: this.meta.twitterUserName },
        { name: 'twitter:creator', content: this.meta.twitterUserName },
      ],
    }
  },
}
