import React from "react";
import { storiesOf } from "@storybook/react";

import DeviceItem from "..";
import { devices } from "../../../__mocks__";

const handleClick = () => alert("Clicked");
const { deviceName } = devices[0];

storiesOf("Components|DeviceItem", module)
  .add("default", () => (
    <DeviceItem handleClick={handleClick}>{deviceName}</DeviceItem>
  ))
  .add("loading", () => (
    <DeviceItem isLoading handleClick={handleClick}>
      {deviceName}
    </DeviceItem>
  ));
