import _ from "lodash";

if (process.env.NODE_ENV === 'development') {
  console.log("☞☞☞ 9527 index 4",123123);
  console.log("☞☞☞ 9527 index 5",process.env.NODE_ENV);
}

function a() {
  let ele = document.createElement("div");
  let btn = document.createElement("button");
  ele.innerHTML = _.join("what", "");
  btn.innerHTML = "BTTTTT";

  ele.appendChild(btn);

  return ele;
}

document.body.appendChild(a());