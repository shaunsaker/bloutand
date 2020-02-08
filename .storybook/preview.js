import React from "react";
import { addDecorator } from "@storybook/react";

import MuiThemeDecorator from "./decorators/MuiThemeDecorator";
import MuiStylesDecorator from "./decorators/MuiStylesDecorator";

addDecorator(MuiThemeDecorator);
addDecorator(MuiStylesDecorator);
