import React from "react";
import { storiesOf } from "@storybook/react";

import DeviceItem from "../DeviceItem";
import { devices } from "../../../__mocks__";

const handleClick = () => alert("Clicked");

storiesOf("Components|DeviceItem", module).add("default", () => (
  <DeviceItem handleClick={handleClick}>{devices[0]}</DeviceItem>
));
