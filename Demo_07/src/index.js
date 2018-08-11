import _ from "lodash";
import logText from './print'

function ha() {

  let btn = document.createElement("button");
  btn.innerHTML = _.join("DEMO_07");

  btn.onclick = logText;

  return btn;
}

document.body.appendChild(ha());
