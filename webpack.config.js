const path = require("path");

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
}