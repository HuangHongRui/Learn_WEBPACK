const config = require("./webpack.common");
const webpack = require("webpack");
const uglifyjs = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");

module.exports = merge(config, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new uglifyjs({
      sourceMap: true
    })
    // new webpack.DefinePlugin({
    //   "process_env_NodeENV": JSON.stringify("production")
    // })
  ]
});