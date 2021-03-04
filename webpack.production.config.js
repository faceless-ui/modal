/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// bundles both the source and the demo, separately

module.exports = [
  {
    devtool: 'source-map',
    mode: 'production',
    entry: './src/index.ts',
    output: {
      filename: 'build.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loaders: ['ts-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
      'body-scroll-lock': 'body-scroll-lock',
      qs: 'qs',
      react: 'react',
      'react-dom': 'react-dom',
      'react-transition-group': 'react-transition-group',
    },
  },
  {
    devtool: 'source-map',
    mode: 'production',
    entry: './demo/index.tsx',
    output: {
      filename: 'demo.bundle.js',
      path: path.resolve(__dirname, 'dist-demo'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loaders: ['ts-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: 'demo/index.html',
      }),
    ],
  }];
