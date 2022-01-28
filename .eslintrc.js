const commonRules = {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
}

// eslint-config-prettierは最後に記述する
// eslintで適応したルールとprettierが競合するルールを後から無効化するため
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    extraFileExtensions: ['.vue'],
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:import/recommended',
    'airbnb-base',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {},
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['eslint-config-prettier'],
      rules: { ...commonRules },
    },
    {
      files: ['**/*.ts', '**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        '@nuxtjs/eslint-config-typescript',
        'airbnb-typescript/base',
        'eslint-config-prettier',
      ],
      rules: { ...commonRules },
    },
    {
      files: ['**/*.vue'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
          '<template>': 'espree',
        },
        sourceType: 'module',
        project: ['./tsconfig.eslint.json'],
      },
      globals: {
        withDefaults: true,
        defineProps: true,
        defineExpose: true,
        defineEmits: true,
      },
      extends: [
        '@nuxtjs/eslint-config-typescript',
        'airbnb-typescript/base',
        'plugin:nuxt/recommended',
        'eslint-config-prettier',
      ],
      rules: { ...commonRules },
    },
  ],
}
