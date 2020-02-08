import React from "react";
import { storiesOf } from "@storybook/react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

import Button from "../Button";

const onClick = () => alert("Clicked");

storiesOf("Components|Button", module)
  .add("primary", () => (
    <Button
      type="primary"
      endIcon={<ChevronRightRoundedIcon />}
      onClick={onClick}
    >
      Connect
    </Button>
  ))
  .add("secondary", () => (
    <Button type="secondary" endIcon={<ClearRoundedIcon />} onClick={onClick}>
      Disconnect
    </Button>
  ));
