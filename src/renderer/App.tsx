import * as React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import Router from "./Router";
import { theme } from "./config";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router />
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
