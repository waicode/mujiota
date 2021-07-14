export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mujiota',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/css/main.scss', lang: 'scss' }],

  styleResources: {
    scss: ['~assets/css/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/date-fns',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    'nuxt-svg-loader',
    'nuxt-fontawesome',
    ['nuxt-lazy-load', {}],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      apiPrefix: '_content',
      dir: 'content',
      fullTextSearchFields: ['title', 'description', 'slug', 'text'],
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