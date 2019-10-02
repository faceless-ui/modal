module.exports = {
  entry: __dirname + '/src',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};