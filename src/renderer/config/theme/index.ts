import { createMuiTheme } from "@material-ui/core/styles";

import { colors } from "../colors";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif'
  },
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.accent
    }
  }
});
