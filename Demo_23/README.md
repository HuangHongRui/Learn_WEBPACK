提取模板：

01. 推荐：将第三方库提取到单独的 Vendor Chunk 文件中，是比较推荐的做法.
02. 原因：它们很少像本地的源代码那样频繁修改。
03. 详细：实现以上步骤，利用客户端的长效缓存机制，可通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。 
04. 使用：可通过使用 SplitChunksPlugin 插件的 cacheGroups 选项来实现。

```

runtimeChunk: 'single',
splitChunks: {
  chacheGroups: {
     vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
     }
  }
}

```