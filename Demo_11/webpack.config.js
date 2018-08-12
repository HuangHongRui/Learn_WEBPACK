const path = require("path");
const Clean = require("clean-webpack-plugin");
const Html = require("html-webpack-plugin");
const SourceMap = require("inline-source-map");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Clean('dist'),
    new Html({
      title: 'DEMO_11 (WATCH_AUTOMATIC BUILD)'
    })
  ],
  devtool: 'inline-source-map'
};