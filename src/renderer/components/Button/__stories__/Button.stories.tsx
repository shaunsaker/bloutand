import React from "react";
import { storiesOf } from "@storybook/react";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

import Button from "../Button";

const onClick = () => alert("Clicked");

storiesOf("Components|Button", module)
  .add("primary", () => (
    <Button kind="primary" endIcon={<ArrowForwardIcon />} onClick={onClick}>
      Connect
    </Button>
  ))
  .add("secondary", () => (
    <Button kind="secondary" endIcon={<ClearRoundedIcon />} onClick={onClick}>
      Disconnect
    </Button>
  ));
