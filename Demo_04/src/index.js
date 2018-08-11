import _ from "lodash";
import "./index.scss";
import Icon from "./logo.png";

function x() {
  let ele = document.createElement("div");

  ele.innerHTML = _.join("HELLO", "");
  ele.classList.add("test_scss");

  let myIcon = new Image();
  myIcon.src = Icon;

  ele.appendChild(myIcon);

  return ele;
}

document.body.appendChild(x());