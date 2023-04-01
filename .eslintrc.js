
  module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2018,
      project: './tsconfig.json',
    },
    env: {
      es6: true,
      node: true,
      mocha: true,
      browser: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:eslint-plugin/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      "next/core-web-vitals",
    ],
  };

