module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'alpha-value-notation': null,
    'no-invalid-position-at-import-rule': false,
    'font-family-no-missing-generic-family-keyword': false,
    'font-family-name-quotes': false,
    'color-function-notation': 'legacy',
  },
}
