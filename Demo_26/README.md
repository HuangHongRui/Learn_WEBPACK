### Shimming

大概瞅了瞅..
目前就这全局变量 很是 实用

>   全局变量 
>   细粒度
>   全局export

```
+   plugins: [
+     new webpack.ProvidePlugin({
+       _: 'lodash'
+     })
+   ]
```

WEBPACK 编译器(compiler)能够识别遵循 ES2015 模块语法、CommonJS 或 AMD 规范编写的模块。
然而，一些第三方的库(library)可能会引用一些全局依赖（例如 jQuery 中的 $）。
这些库也可能创建一些需要被导出的全局变量。这些“不符合规范的模块”就是 shimming 发挥作用的地方。

我们不推荐使用全局的东西！在 webpack 背后的整个概念是让前端开发更加**模块化**。
也就是说，需要编写具有良好的**封闭性(well contained)**、彼此隔离的模块，以及不要依赖于那些隐含的依赖模块（例如，全局变量）。请只在必要的时候才使用本文所述的这些特性。
