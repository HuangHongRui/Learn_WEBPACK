const config = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});