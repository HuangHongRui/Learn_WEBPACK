const config = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(config, {
  mode: "develpment",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  devtool: "inline-source-map",
  Plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
