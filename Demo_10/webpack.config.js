const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'DEMO_10 (SOURCE_MAP)'
    })
  ],
  //  追踪BUG源头文件
  devtool: 'inline-source-map'
};