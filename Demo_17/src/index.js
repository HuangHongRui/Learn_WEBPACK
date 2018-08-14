import { fun } from "./math.js";

function test() {
  let ele = document.createElement("pre");

  ele.innerHTML = [
    "Yeap",
    "Hey" + fun(6)
  ].join("\n\n");

  return ele;
}

document.body.appendChild(test());