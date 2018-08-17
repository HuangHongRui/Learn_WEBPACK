import _ from "lodash";

document.body.appendChild((() => {

  let ele = document.createElement("div");
  ele.innerHTML = _.join(["HHHH"], "");
  ele.appendChild(document.createElement("br"));

  let btn = document.createElement("button");
  btn.innerHTML = _.join(["xxxx"], "");
  btn.onclick = e => import( /* webpackChunkName: 'print'*/ "./print").then(module => module.default());

  ele.appendChild(btn);
  return ele;

})());