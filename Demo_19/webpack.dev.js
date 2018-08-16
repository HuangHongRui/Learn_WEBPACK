const merge = require("webpack-merge");
const config = require("./webpack.common");
const webpack = require("webpack");

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