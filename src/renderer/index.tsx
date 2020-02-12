import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

render(<App />, mainElement);
