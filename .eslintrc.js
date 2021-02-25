module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@trbl/eslint-config/configs/base',
    '@trbl/eslint-config/configs/jest',
    '@trbl/eslint-config/configs/react',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
