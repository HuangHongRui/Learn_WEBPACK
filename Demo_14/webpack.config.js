const path = require("path");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    //  启动
    hot: true
  },
  plugins: [
    new H({
      title: 'DEMO_14 (HOT_MODULES)'
    }),
    new C(['dist']),
    //  导入这个 >> 模块热替换 << 功能
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
