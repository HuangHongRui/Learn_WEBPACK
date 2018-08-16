const config = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'production.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});