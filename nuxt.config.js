export default {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    pageSize: process.env.PAGE_SIZE || 5,
  },

  privateRuntimeConfig: {},

  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'server',

  /**
   * 注意：除外ファイルは`.nuxtignore`を参照すること。
   */

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'ja' },
    title: 'mujiota.com',
    meta: [
      // その他のメタタグはページ毎に「composables/useHeaderMeta.ts」を使って設定
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        // fontawesome（CSS疑似要素で利用）
        src: 'https://kit.fontawesome.com/29e08b7892.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/css/main.scss', lang: 'scss' }],

  typescript: {
    // ファイル保存時にコードの型チェックとlintの両方を実施
    typeCheck: {
      eslint: {
        files: './**/*.{ts,vue}',
      },
    },
  },

  styleResources: {
    scss: ['~assets/css/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/init.client.ts', mode: 'client' },
    '~/plugins/filter.ts',
    '~/plugins/meta.ts',
    '~/plugins/post.ts',
    '~/plugins/taxonomy.ts',
    '~/plugins/video.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }, // GridをIE11に対応
        },
      },
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    'nuxt-typed-vuex',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/date-fns',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-gtag',
    '@nuxt/content',
    'nuxt-buefy',
    'nuxt-svg-loader',
    ['nuxt-lazy-load', { directiveOnly: true }],
    [
      '@nuxtjs/google-adsense',
      {
        id: process.env.GA_ADSENSE_ID,
        pageLevelAds: false,
        analyticsUacct: process.env.GA_TRACKING_ID,
        analyticsDomainName: process.env.BASE_URL,
      },
    ],
  ],

  generate: {
    interval: 2000,
    async routes() {
      // eslint-disable-next-line global-require
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => {
        if (file.path === '/index') {
          return '/'
        }
        if (file.path.startsWith('/articles')) {
          return file.path.replace('/articles', '')
        }
        if (file.path.startsWith('/pages')) {
          return file.path.replace('/pages', '')
        }
        return file.path
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

  storybook: {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-knobs',
      '@storybook/addon-a11y',
    ],
  },

  'google-gtag': {
    id: process.env.GA_TRACKING_ID,
    debug: false,
  },
}
