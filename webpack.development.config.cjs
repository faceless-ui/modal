/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './demo/index.tsx',
  output: {
    filename: 'demo.bundle.js',
    path: path.resolve(__dirname, 'demo'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()],
              }),
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: 'demo/index.html',
    }),
    new ESLintPlugin({
      fix: true,
      emitWarning: true,
    }),
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
};
