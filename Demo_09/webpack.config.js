const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    //  Clean The build Dir > Dist
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'DEMO_09 (Clean Build Dir)'
    })
  ]
};
