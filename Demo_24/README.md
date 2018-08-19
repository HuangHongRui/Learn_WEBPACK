### 模块标识符

- main bundle 会随着自身的新增内容的修改，而发生变化。
- vendor bundle 会随着自身的 module.id 的修改，而发生变化。
- manifest bundle 会因为当前包含一个新模块的引用，而发生变化。

`new webpack.HashedModuleIdsPlugin()`
启用该插件后，不管再添加任何新的本地依赖，对于每次构建，Vendor hash 都仍保持一致

