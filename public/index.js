import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Module from "../src";

const image = {
  url: "https://media.crystallize.com/demo/19/7/24/2/candy_kid.jpg",
  altText: "Illustration of man with bag of chips",
  variants: [
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@100/candy_kid.webp",
      width: 100
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@500/candy_kid.jpg",
      width: 500
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@200/candy_kid.webp",
      width: 200
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@768/candy_kid.jpg",
      width: 768
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@100/candy_kid.jpg",
      width: 100
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@200/candy_kid.jpg",
      width: 200
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/2/@500/candy_kid.webp",
      width: 500
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@100/candy_kid.jpg",
      width: 100
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@200/candy_kid.webp",
      width: 200
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@500/candy_kid.jpg",
      width: 500
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@100/candy_kid.webp",
      width: 100
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@200/candy_kid.jpg",
      width: 200
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@768/candy_kid.jpg",
      width: 768
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@500/candy_kid.webp",
      width: 500
    },
    {
      url: "https://media.crystallize.com/demo/19/7/24/1/@768/candy_kid.webp",
      width: 768
    }
  ]
};

ReactDOM.render(
  <div>
    <h1>Images widths: 100px up to 1000px wide screen. Then 400px</h1>
    <hr />
    <figure>
      <figcaption>Data from Crystallize</figcaption>
      <Module {...image} sizes="(max-width: 999px) 100px, 400px" />
    </figure>
    <hr />
    <figure>
      <figcaption>Render as regular img</figcaption>
      <Module src={image.url} alt="Alt text" />
    </figure>
    <hr />
    <Module {...image}>
      {p => {
        return (
          <div style={{ textAlign: "center" }}>
            Hi from child as render func
          </div>
        );
      }}
    </Module>
  </div>,
  document.getElementById("root")
);
