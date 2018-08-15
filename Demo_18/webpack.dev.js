const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// merge( 通用配置, {Mode配置}
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
});