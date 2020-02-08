import React from "react";
import { muiTheme } from "storybook-addon-material-ui";

import { theme } from "../../../src/renderer/config";

const MuiThemeDecorator = muiTheme(theme);

export default MuiThemeDecorator;
