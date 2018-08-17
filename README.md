# Learn_WEBPACK
學無止盡，所以>>還學咩啊....

---

`
lodash
html-webpack-plugin
inline-source-map
clean-webpack-plugin
webpack
webpack-cli
express
webpack-dev-server
`

---

DEMO_18_生产/开发环境

> uglifyjs-webpack-plugin webpack-dev-server

01. Don't repeat yourself - DRY
02. webpack.config 中抽离prod/dev配置各为单独文件，再用插件`webpack-merge`合并。
03. prod环境也该使用`source-map`, 使用插件`uglify-webpack-plugin`
04. 为防止一些可能针对具体环境进行代码优化而删/加一些重要代码。可使用`webpack.DefinePlugin` 为所有的依赖定义这个变量
05. 任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量   

---

DEMO_19_代码分离(CODE_SPLITTING)
01. 夸一波: 代码分离是 webpack 中最引人注目的特性之一。
02. 介绍: 此特性能够把代码分离到不同的 bundle 中， 然后可以按需加载或并行加载这些文件。
03. 作用: 代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
04. 用法: 三种常用方法
- 入口起点：使用 entry 配置手动地分离代码。 (问题 >> 会重复导入-。-)
- 防止重复：使用 SplitChunks 去重和分离 chunk。(会把共用的module抽出来另生成一共用文件)
- 动态导入：通过模块的内联函数调用来分离代码。(①推荐方式：使用`import`语法 ②使用webpack特定的`require.ensure`。)

---

DEMO_20_动态导入

01. 在代码中使用 import 导出，且返回结果为一个 promise
02. 配合使用 async 最为完美

---

DEMO_21_懒加载/按需加载

01. 介绍: 一种很好的优化网页或应用的方式。
02. 方式: 先把代码在一些逻辑断点处分离开，然在一些代码块中完成某些操作后，立即/即将引用另外一些新的代码块。
03. 好处: 这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

    将print单独打包
    页面加载时，不会请求该包.
    当点击时，请求获取该包，并执行.

DEMO_22_缓存 (Caching)

01. 介绍：通过命中缓存，以降低网络流量，使网站加载速度更快
02. 问题：部署新版本时不更改资源的文件名，浏览器会认为它没有被更新，就会使用它的缓存版本
03. 解决：通过必要的配置（使文件名不同），确保 webpack 编译生成的文件能够被客户端缓存&识别更新

    通过在入口处为文件名键入 `[name].[chunkhash].js` 即可简单做到