import _ from "lodash";

document.body.appendChild(
  (() => {
    let ele = document.createElement("div");
    ele.innerHTML = _.join("DEMO_10 - SOURCE_MAP", '');
    return ele;
  })()
);
