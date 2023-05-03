module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['raect', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};