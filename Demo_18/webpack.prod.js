const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NodeENV": JSON.stringify("production")
    })
  ]
});