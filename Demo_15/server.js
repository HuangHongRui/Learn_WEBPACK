const wds = require("webpack-dev-server");
const wp = require("webpack");
const config = require("./webpack.config");

const option = {
  contentBase: "./dist",
  hot: true,
  host: "localhost"
};

wds.addDevServerEntrypoints(config, option);

let compiler = wp(config);

let server = new wds(compiler, option);

server.listen(3000, 'localhost', ()=>{
  console.log("☞☞☞ 9527 server 18 Port >>>>",1234);
})
