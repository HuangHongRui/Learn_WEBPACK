const merge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.common");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});