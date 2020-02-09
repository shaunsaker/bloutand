import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import "./index.css";
import Router from "./Router";
import { theme } from "./config";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
