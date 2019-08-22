module.exports = {
  "root": true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "globals": {
    "helpers": true,
    "Tqmall": true,
    "Tqmall2": true,
    "BMap": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": 0,
    "no-debugger": 0,
    "quotes": [2, "single"],
    "semi": [2, "never"],
    "object-curly-spacing": [2, "always"],
    "no-await-in-loop": 2,
    "for-direction": 2,
    "no-template-curly-in-string": 2,
    "block-scoped-var": 2,
    "no-extra-bind": 2,
    "prefer-promise-reject-errors": 2,
    "require-await": 2,
    "wrap-iife": [2, "outside"],
    "no-catch-shadow": 2,
    "no-use-before-define": 2,
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "func-call-spacing": [2, "never"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": 2,
    "space-before-blocks": 2,
    "generator-star-spacing": [2, { "before": false, "after": true }],
    "no-duplicate-imports": 2,
    "template-curly-spacing": [2, "always"]
  }
}
