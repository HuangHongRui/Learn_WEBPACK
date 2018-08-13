import _ from "lodash";
import print from "./print";

function a() {
  let ele = document.createElement("button");
  ele.innerHTML = _.join("BUTON_>>_DEMO_15", "");
  ele.onclick = print;

  return ele;
}

//  当print 更新时，重新渲染获取元素
let ele = a();

document.body.appendChild(ele);

//  当 print.js 内部发生变更时可以告诉 webpack 接受更新的模块。
if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(ele);
    ele = a();  //  重新渲染后，获取更新
    document.body.appendChild(ele);
  });
}



