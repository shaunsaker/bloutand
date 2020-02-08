import React from "react";
import { StylesProvider } from "@material-ui/styles";

const MuiStylesDecorator = storyFn => (
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
);

export default MuiStylesDecorator;
