import _ from "lodash";

function a() {
  let ele = document.createElement("div");
  ele.innerHTML = _.join(["hahA"], "");
  let br = document.createElement("br");
  ele.appendChild(br);

  let btn = document.createElement("btn");
  btn.innerHTML = _.join(["YEAP_PICK_ME"], "");


  //  组件懒加载_在此展示 ！
  //  将print单独打包
  //  页面加载时，不会请求该包.
  //  当点击时，请求获取该包，并执行.
  btn.onclick = e => import( /*webpackChunkName: 'print'*/ "./print.js").then(module => {
    return module.default();
  });

  ele.appendChild(btn);
  return ele;
}

document.body.appendChild(a());