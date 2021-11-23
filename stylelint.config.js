module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // TODO: Unknown rule custom-property-no-missing-var-function のエラーが出てしまうので安定後にパッケージを要アップデート
    'alpha-value-notation': null,
    'no-descending-specificity': null,
    'custom-property-no-missing-var-function': null,
    'font-family-name-quotes': null, // Prettierと競合するため無効化
    'font-family-no-missing-generic-family-keyword': null, // Font Awesome 5 Free を利用
    'no-invalid-position-at-import-rule': null, // main.scssであとからbulmaをimport
    'color-function-notation': 'legacy',
  },
}
