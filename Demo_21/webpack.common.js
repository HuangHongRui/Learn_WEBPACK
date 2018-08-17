const path = require("path");
const H = require("html-webpack-plugin");
const C = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new H({
      title: "DEMO_21_(Lazy Load)"
    }),
    new C("dist")
  ],

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};
