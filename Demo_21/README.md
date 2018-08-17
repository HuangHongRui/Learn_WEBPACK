DEMO_21_懒加载/按需加载(LAZY_LOAD)

介绍: 一种很好的优化网页或应用的方式。
方式: 先把代码在一些逻辑断点处分离开，然在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。
好处: 这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。


    组件懒加载_在此展示 ！
    将print单独打包
    页面加载时，不会请求该包.
    当点击时，请求获取该包，并执行.
    

```

Hash: bdca1e9221efeff29d71
Version: webpack 4.16.5
Time: 2755ms
Built at: 2018-08-17 22:38:38
              Asset       Size  Chunks             Chunk Names
     main.bundle.js   71.9 KiB       0  [emitted]  main
    print.bundle.js  272 bytes       1  [emitted]  print
 main.bundle.js.map    676 KiB       0  [emitted]  main
print.bundle.js.map  443 bytes       1  [emitted]  print
         index.html  195 bytes          [emitted]  
Entrypoint main = main.bundle.js main.bundle.js.map
[1] ./src/index.js 498 bytes {0} [built]
[2] (webpack)/buildin/global.js 489 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
[4] ./src/print.js 148 bytes {1} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 489 bytes {0} [built]

```