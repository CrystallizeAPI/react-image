import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Module from "../src";
import images from "./images";

ReactDOM.render(
  <div>
    <h1>Images widths: 100px up to 1000px wide screen. Then 400px</h1>
    <Module {...images[0]} sizes="(min-width: 999px) 100px, 400px" />
    <div> - - - </div>
    {/* <Module
      src={images[0].url}
      alt="Alt text"
      sizes="(min-width: 900px) 800px, 80vw"
    />
    <Module {...images[0]}>
      {p => {
        console.log(p);
        return <div>Hey from child as render func</div>;
      }}
    </Module> */}
  </div>,
  document.getElementById("root")
);
