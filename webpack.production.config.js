module.exports = {
  mode: "production",
  entry: __dirname + '/src',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ]
  },
  output: {
    filename: 'build.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2',
  }
};