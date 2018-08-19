const path = require("path");
const webpack = require("webpack");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new H({
      title: "DEMO_24_(Module Identifiers)"
    }),
    new C("dist"),
    // 启用该插件后，不管再添加任何新的本地依赖，对于每次构建，Vendor hash 都仍保持一致
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
