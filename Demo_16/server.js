const wds = require("webpack-dev-server");
const wp = require("webpack");
const config = require("./webpack.config");

let options = {
  contentBase: "./dist",
  host: "localhost",
  hot: true
};

wds.addDevServerEntrypoints(config, options);

const compiler = wp(config);

const server = new wds(compiler, options);

server.listen(1234, "localhost", () => {
  console.log("☞☞☞ 9527 server 18 Port", 1234);
});
