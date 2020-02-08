import React from "react";
import { storiesOf } from "@storybook/react";

import Logo from "../Logo";

storiesOf("Components|Logo", module).add("default", () => (
  <Logo version="1.0.0" />
));
