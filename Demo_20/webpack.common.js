const path = require("path");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    // test: "./src/test.js"
  },
  output: {
    filename: "[name].bundle.js",
    //  动态导入
    //  此选项决定了非入口(non-entry) chunk 文件的名称。
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new H({
      title: "DEMO_19 (Code Separation)"
    }),
    new C("dist"),
  ],
  //  防止重复引入
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // }
};