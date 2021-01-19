module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'template-curly-spacing' : 'off',
    'indent': ["error", 2],
    'vue/max-attributes-per-line': ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "eol-last": 0,
     "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}