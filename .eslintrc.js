module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },

  plugins: ['react'],

  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['off'],
    quotes: ['error', 'single']
  }
}
