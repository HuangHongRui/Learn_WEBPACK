> npm i node-sass sass-loader css-loader style-loader lodash file-loader html-webpack-plugin inline-source-map clean-webpack-plugin webpack webpack-cli express webpack-dev-server

> 当使用 webpack dev server 和 Node.js API 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。而是，在创建选项时，将其作为第二个参数传递。
01. HMR 进阶
02. (重点 1 ) 如果使用 `webpack_dev_server` && `Node.js` 时，记得别将 `devServer` 放在 `webpack.config.js` 中
03. (重点 2 ) module.hot 捕捉到更新后，需要删旧换新，否则无法更新（如事件-index.js——DEMO）