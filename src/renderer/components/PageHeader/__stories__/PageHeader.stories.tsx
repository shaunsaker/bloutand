import React from "react";
import { storiesOf } from "@storybook/react";
import SyncRounded from "@material-ui/icons/SyncRounded";

import PageHeader from "../PageHeader";
import Button from "../../Button";

const onClick = () => alert("Clicked");

storiesOf("Components|PageHeader", module)
  .add("default", () => <PageHeader text="Scanning for devices..." />)
  .add("with children", () => (
    <PageHeader text="Discovered Devices">
      <Button type="secondary" endIcon={<SyncRounded />} onClick={onClick}>
        Rescan
      </Button>
    </PageHeader>
  ));
