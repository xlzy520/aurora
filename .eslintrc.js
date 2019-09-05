module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', "plugin:vue-libs/recommended"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': [0, {
      'properties': 'always'
    }],
    "vue/name-property-casing": ["error", "PascalCase"],
    'space-before-function-paren': [2, 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
