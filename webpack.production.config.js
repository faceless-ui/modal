const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'build.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  externals: {
    '@trbl/react-html-element': '@trbl/react-html-element',
    'body-scroll-lock': 'body-scroll-lock',
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    qs: 'qs',
    'react-transition-group': 'react-transition-group',
  },
};
