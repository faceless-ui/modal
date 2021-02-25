/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// this will bundle the source and then the demo

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
          loaders: [
            'ts-loader',
          ],
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
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loaders: [
            'ts-loader',
          ],
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
