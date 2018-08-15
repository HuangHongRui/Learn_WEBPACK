> Don't repeat yourself - DRY


> 技术上讲，NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量。通常用于决定在开发环境与生产环境(dev-vs-prod)下，服务器工具、构建脚本和客户端 library 的行为。

`npm install --save-dev webpack-merge`
`npm i -D uglifyjs-webpack-plugin`

01. Demo 主讲 生产 && 开发环境 的webpack.config 抽离出不同的配置单独作一文件，最后将 通用/开发/生产 三个文件用 插件合并起来。
02. webpack 根据环境使用对应配置
03. Production 中使用 `source-map` （例子位于 webpack.prod.js）
04. 当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。这时可以使用 webpack 内置的 `DefinePlugin` 为所有的依赖定义这个变量：(例子： webpack.prod.js)
05. 任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量   

