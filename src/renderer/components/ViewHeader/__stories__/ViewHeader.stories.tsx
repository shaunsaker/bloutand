import React from "react";
import { storiesOf } from "@storybook/react";
import SyncRounded from "@material-ui/icons/SyncRounded";

import ViewHeader from "..";
import Button from "../../Button";

const onClick = () => alert("Clicked");

storiesOf("Components|ViewHeader", module)
  .add("default", () => <ViewHeader text="Scanning for devices..." />)
  .add("with children", () => (
    <ViewHeader text="Discovered Devices">
      <Button kind="secondary" endIcon={<SyncRounded />} onClick={onClick}>
        Rescan
      </Button>
    </ViewHeader>
  ));
