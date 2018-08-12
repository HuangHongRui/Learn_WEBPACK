> 模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。

01. 模块热替换 / HMR
02. `HotModuleReplacementPlugin` 无需另外 install
03. 在 入口 文件中添加逻辑判断，当监视文件改动时，作出处理
04. 在 配置文件中， 需两部操作： plugin 导入， devServer 中启动。（详情看webpack.config.js）
05. 此Demo中， 监视文件： src/print.js. (当该该文件代码作出变动时，HMR会处理并Console)