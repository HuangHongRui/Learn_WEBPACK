import _ from "lodash";

document.body.appendChild((() => {
  let ele = document.createElement("button");
  ele.innerHTML = _.join("FUCK", "");
  return ele;
})());

