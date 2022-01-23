module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties', // 効果のないプロパティを検出
    'stylelint-declaration-strict-value', // リテラル値の直接指定を禁止
    'stylelint-no-unsupported-browser-features', // ブラウザ非対応プロパティを検出
    'stylelint-order', // ソート指定
  ],

  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],

  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null, // 未知のルールの使用許可があれば設定
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: [] }],
    // 効果のないプロパティを検出
    'plugin/declaration-block-no-ignored-properties': true,
    // TODO: stylelint-no-unsupported-browser-featuresのpostcssが8.4.5になってしまう不具合があり除外、追って確認
    // .browserlistrcに従い非対応を除いたブラウザ別のlint対応
    // 'plugin/no-unsupported-browser-features': [
    //   true,
    //   {
    //     ignore: ['rem'],
    //     ignorePartialSupport: true,
    //   },
    // ],
    // 使用可能な単位の指定
    'declaration-property-unit-allowed-list': {
      'line-height': [], // line-heightは「単位なし」の記述のみを許可
    },
    // リテラル値スタイルの禁止
    'scale-unlimited/declaration-strict-value': [
      [
        // 禁止対象項目
        '/color$/',
        'fill',
        'stroke',
        'z-index',
        'font-size',
        'font-weight',
        'border-radius',
        '/^margin.*',
        '/^padding.*',
      ],
      {
        // 以下のリテラル値のみ許可
        ignoreValues: {
          'font-size': 0,
          '/color$/': ['inherit', 'currentColor'],
        },
        disableFix: true, // 自動補正はしない
      },
    ],
    // 'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null, // Font Awesome 5 Free を利用
    'color-function-notation': 'legacy', // ex. rgb(0, 0, 0), rgba(12, 122, 231, 0.2)
  },
  root: true,
}
