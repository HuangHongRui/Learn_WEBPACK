const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  //  模式 > 开发 > 触发 `tree shaking`
  // mode: "development",
  mode: "production",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {sideEffects: false}
    ]
  }
};