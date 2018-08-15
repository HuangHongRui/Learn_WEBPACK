# Learn_WEBPACK
學無止盡，所以>>還學咩啊....




---

DEMO_18
01. Don't repeat yourself - DRY
02. webpack.config 中抽离prod/dev配置各为单独文件，再用插件`webpack-merge`合并。
03. prod环境也该使用`source-map`, 使用插件`uglify-webpack-plugin`
04. 为防止一些可能针对具体环境进行代码优化而删/加一些重要代码。可使用`webpack.DefinePlugin` 为所有的依赖定义这个变量
05. 任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量   

