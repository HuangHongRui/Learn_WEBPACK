import _ from "lodash";
import Icon from "./logo.png";
import "./index.scss";

function nothing() {
  let ele = document.createElement("div");
  ele.innerHTML = _.join("明月几时有，自己抬头瞅", "");
  ele.classList.add("cn");

  let icon = new Image();
  icon.src = Icon;
  ele.appendChild(icon);

  return ele;
}

document.body.appendChild(nothing());