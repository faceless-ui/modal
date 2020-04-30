const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './demo/index.js',
  output: {
    filename: 'demo.bundle.js',
    path: path.resolve(__dirname, 'demo'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader/webpack',
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              emitWarning: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      // html to duplicate
      template: 'demo/index.html',
    }),
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
};
