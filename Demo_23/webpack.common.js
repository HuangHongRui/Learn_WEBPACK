const path = require("path");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    //  带上 chunkhash 后，浏览器知道你的文件更新从而发起新请求
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new H({
      title: "DEMO_23 (CACHING_Extracting Boilerplate)"
    }),
    new C("dist")
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};