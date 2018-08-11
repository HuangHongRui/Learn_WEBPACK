const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    //  识别打包规则
    rules: [
      {
        //  识别 以 css 为结尾的文件
        test: /\.css$/,
        //  使用 css-loader & style-loader 进行处理
        use:  [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};