const environment = process.env.NODE_ENV
const envSettings = require(`./env.${environment}.js`)

export default {
  // cross-env
  env: envSettings,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'ja' },
    title: 'mujiota',
    meta: [
      { hid: 'robots', name: 'robots', content: 'noindex' }, // FIXME: 公開時は消すこと

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `mujiota.com`,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: `mujiota.com`,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'blog',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://mujiota.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://mujiota.com/logo/mujiota-logo@2x.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@aiza_wai' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@aiza_wai',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // fontawesome
      {
        src: 'https://kit.fontawesome.com/29e08b7892.js',
        crossorigin: 'anonymous',
      },
      // Google Adsense (Auto)
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6722804994112729',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/css/main.scss', lang: 'scss' }],

  styleResources: {
    scss: ['~assets/css/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/filter.js', '~/plugins/video.js', '~/plugins/tag.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/date-fns',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    'nuxt-buefy',
    'nuxt-svg-loader',
    'nuxt-fontawesome',
    ['nuxt-lazy-load', { directiveOnly: true }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // FIXME: プロキシ設定
    // proxy: true,
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    component: 'fa',
  },
}
