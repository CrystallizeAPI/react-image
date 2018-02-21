import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Module from "./module";

const srcVariations = [
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_300.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_320.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_414.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_768.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_828.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_1280.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_1366.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_1440.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_1536.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_1920.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_2560.jpg",
  "https://accelerated.atoms.crystallize.digital/gullpila/images/133_odd-jerv/_resized_3200.jpg"
];

ReactDOM.render(
  <div>
    <Module srcVariations={srcVariations} alt="Alt text" width="400" />
  </div>,
  document.getElementById("root")
);
