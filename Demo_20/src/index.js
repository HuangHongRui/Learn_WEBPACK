//  动态导入
//  通过使用动态导入来分离一个 chunk：
function dynamicLoad() {

  return import (  /* webpackChunkName: "lodash" */ "lodash").then(_ => {
    let ele = document.createElement("button");
    ele.innerHTML = _.join(["haha", "BTN"], "");
    return ele;
  }).catch(e => console.log("☞☞☞ 9527 index 10", e));
}


// 上面 import() 会返回一个 promise ， 所以可以用async来继续优化这段Code
async function dynamicLoad() {
  const ele = document.createElement("btn");
  const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
  ele.innerHTML = _.join(["xixi"], "");
  return ele;
}

dynamicLoad().then(component => {
  document.body.appendChild(component);
});
