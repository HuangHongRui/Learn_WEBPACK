const merge = require("webpack-merge");
const ugligyjs = require("uglifyjs-webpack-plugin");
const config = require("./webpack.common");

module.exports = merge(config, {
  mode: "production",
  devtool: 'source-map',
  plugins: [
    new ugligyjs({
      sourceMap: true
    })
  ]
});

