const commonRules = {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'import/no-default-export': ['off'],
  'import/prefer-default-export': ['off'],

  // Vuexは例外的にno-shadow, no-param-reassignを許可
  'no-shadow': ['error', { allow: ['state'] }],
  '@typescript-eslint/no-shadow': ['error', { allow: ['state'] }],
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'e',
        'ctx',
        'req',
        'request',
        'res',
        'response',
        '$scope',
      ],
    },
  ],
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
  rules: { ...commonRules },
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['eslint-config-prettier'],
      rules: { ...commonRules },
    },
    {
      files: ['**/*.ts', '**/*.d.ts'],
      extends: [
        '@nuxtjs/eslint-config-typescript',
        'airbnb-typescript/base',
        'eslint-config-prettier',
      ],
      rules: { ...commonRules },
    },
    {
      files: ['**/*.vue'],
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
