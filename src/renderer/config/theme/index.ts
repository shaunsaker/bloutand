import { createMuiTheme } from "@material-ui/core/styles";

import { colors } from "../colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.accent
    }
  }
});
