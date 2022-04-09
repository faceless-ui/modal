module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: [
    'jest',
    'jest-dom',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
      },
    ],
    'react/jsx-first-prop-new-line': [
      1,
      'multiline',
    ],
    'react/jsx-closing-bracket-location': [
      1,
      'tag-aligned',
    ],
    'object-curly-newline': [
      1,
      {
        multiline: true,
        consistent: true,
      },
    ],
    'object-property-newline': [
      1,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'no-unused-vars': [
      1,
    ],
    "@typescript-eslint/ban-ts-comment": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
