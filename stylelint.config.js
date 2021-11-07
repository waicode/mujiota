module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'custom-property-no-missing-var-function': null,
    'no-invalid-position-at-import-rule': false,
    'font-family-no-missing-generic-family-keyword': false,
    'font-family-name-quotes': false,
    'color-function-notation': 'legacy',
  },
}
