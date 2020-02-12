import * as React from "react";
import { render } from "react-dom";

import App from "./App";

/*
 * Add Google Web Fonts as link in head
 */
const linkElement = document.createElement("link");
linkElement.setAttribute("rel", "stylesheet");
linkElement.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Muli:400,800|Source+Sans+Pro:400,600&display=swap"
);
document.head.appendChild(linkElement);

/*
 * Create the root div
 */
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

render(<App />, mainElement);
