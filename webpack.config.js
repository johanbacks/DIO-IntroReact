const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename:"bundler.js"
  }, 
  module: {
    rules : [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      use:{
        loader:"babel-loader"
        }
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]

}