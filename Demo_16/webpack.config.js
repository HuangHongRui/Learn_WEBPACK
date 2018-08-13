const path = require("path");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  // 使用Node API 时，将该配置写到 Server 选项去
  // devServer: {
  //   contentBase: "./dist",
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new H({
      title: "DEMO_16 (HMR/ STYLE_LOADER)"
    }),
    new C(["dist"]),
    new webpack.HotModuleReplacementPlugin()
  ]
};
