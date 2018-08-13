//  导入路径模块-其作用方便定位
//  通过配置文件打包Command： npx webpack --config *FileName*
const path = require('path');

//  模块导出
module.exports = {
  //  打包文件入口
  entry: './src/index.js',
  //  打包结果输出
  output: {
    //  包名
    filename: 'name.js',
    //  存放位置
    path: path.resolve(__dirname, 'dist')
  }
};