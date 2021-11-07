export default {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
  },

  privateRuntimeConfig: {},

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'ja' },
    title: 'mujiota.com',
    meta: [
      // その他のメタタグはページ毎に「mixins/meta.js」の設定を上書き
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/css/main.scss', lang: 'scss' }],

  styleResources: {
    scss: ['~assets/css/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/init.client.js', mode: 'client' },
    '~/plugins/filter.js',
    '~/plugins/firebase.js',
    '~/plugins/video.js',
    '~/plugins/taxonomy.js',
    '~/plugins/meta.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],

  build: {},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/date-fns',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-gtag',
    '@nuxt/content',
    'nuxt-buefy',
    'nuxt-svg-loader',
    'nuxt-fontawesome',
    ['nuxt-lazy-load', { directiveOnly: true }],
    [
      '@nuxtjs/google-adsense',
      {
        id: process.env.GA_ADSENSE_ID,
        pageLevelAds: true,
        analyticsUacct: process.env.GA_TRACKING_ID,
        analyticsDomainName: process.env.BASE_URL,
      },
    ],
  ],

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => {
        if (file.path === '/index') {
          return '/'
        } else if (file.path.startsWith('/articles')) {
          return file.path.replace('/articles', '')
        } else if (file.path.startsWith('/pages')) {
          return file.path.replace('/pages', '')
        } else {
          return file.path
        }
      })
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      apiPrefix: '_content',
      dir: 'content',
      fullTextSearchFields: ['title', 'description', 'text'],
      nestedProperties: [],
      markdown: {
        remarkPlugins: [
          'remark-squeeze-paragraphs',
          'remark-slug',
          'remark-autolink-headings',
          'remark-external-links',
          'remark-footnotes',
          'remark-emoji',
          'remark-directive',
        ],
        rehypePlugins: [
          'rehype-minify-whitespace',
          'rehype-sort-attribute-values',
          'rehype-sort-attributes',
          'rehype-raw',
        ],
        prism: {
          theme: 'prismjs/themes/prism-base16-ateliersulphurpool.light.css',
        },
      },
    },
  },

  'google-gtag': {
    id: process.env.GA_TRACKING_ID,
    debug: false,
  },

  fontawesome: {
    component: 'fa',
  },
}
