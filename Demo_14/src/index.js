import _ from "lodash";
import ax from "./print";

function aaa() {
  let ele = document.createElement("div");
  let btn = document.createElement("button");
  ele.innerHTML = _.join("DEMO_10 - SOURCE_MAP", "");
  btn.innerHTML = "Touch ME.";
  btn.onclick = ax;
  ele.appendChild(btn);
  return ele;
}

document.body.appendChild(aaa());

//  当 print.js 内部发生变更时可以告诉 webpack 接受更新的模块。
if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    ax();
  });
}


