module.exports = {
  extends: '@startrco/stylelint-config-base',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
  },
};
