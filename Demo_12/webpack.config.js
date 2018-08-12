const path = require("path");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map",
  //  WEBPACK_DEV_SERVER PLUGIN
  //  告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    // contentBase: './dist',
    // compress: true,
    // port: 6000
  },
  plugins: [
    new H({
      title: "DEMO_12 (WEBPACK_DEV_SERVER_AUTOMATIC_BUILD)"
    }),
    new C("dist")
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};