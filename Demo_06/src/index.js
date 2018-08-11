import _ from "lodash";
import logo from "./logo.png";
import "./index.scss";
import data from "./data.xml";

function x() {
  let ele = document.createElement("div");
  ele.innerHTML = _.join("DEMO_06", "");
  ele.classList.add("six");

  let pic = new Image();
  pic.src = logo;
  ele.appendChild(pic);

  console.log("☞☞☞ 9527 index 15", data);

  return ele;
}

document.body.appendChild(x());