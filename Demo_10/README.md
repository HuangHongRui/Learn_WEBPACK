>The tools in this guide are only meant for development, please avoid using them in production! 
01. 该DEMO处于开发环境之下
02. `source-map` 用于快速查找到代码BUG.(如多个文件被打包成一个，可知问题出自具体哪个)
03. 酱就可以快速找到BUG处理掉
```
# 依赖项
npm i node-sass sass-loader css-loader style-loader lodash file-loader html-webpack-plugin inline-source-map clean-webpack-plugin
```
```
# 抛错
 *  inline-source-map
 *  将会捕捉到抛出的错误
 *  位于 print.js 第 9 行
```