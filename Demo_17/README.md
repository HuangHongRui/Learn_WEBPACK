> tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)

---

> 新的 webpack 4 正式版本，扩展了这个检测能力，通过 package.json 的 `sideEffects` 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

---

> npm i lodash html-webpack-plugin inline-source-map clean-webpack-plugin webpack webpack-cli express webpack-dev-server

---

> 「副作用」的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。

01. 位置中 `mode`(模式) 设置为 `development` (开发)
02. 文档上说，这时 没引用到的代码 会被注释（但我没看到注释- -）

03. 试着在`package.json`中，将文件标记为无副作用(side-effect-free) 
04. `sideEffects : false` 这样旧相当于告知 webpack ，这整个项目所有文件都实施 tree shaking(移除无用代码)

05. 当然，项目中肯定有些代码文件说 有 副作用的，So >>>> 可以： `sideEffects: [ 'filepath+filename.js' ... ]`解决

06. `sideEffects` 可以在 `webpack.config.js` 的rules 中设置

07. 最后压缩输出 则使用 生产模式 `"mode": "production"`