import React from "react";
import { addDecorator } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";

import { theme } from "../src/renderer/config";

addDecorator(muiTheme(theme));
