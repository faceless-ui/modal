const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    src: __dirname + '/src',
    demo: __dirname + '/demo'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/demo/public',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./demo/index.html",
      filename: "./index.html",
      inject: "body"
    })
  ],
  devServer: {
      inline:true,
      contentBase: './',
      port: 3000
    },
};