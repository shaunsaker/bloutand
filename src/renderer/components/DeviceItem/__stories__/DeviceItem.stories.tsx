import React from "react";
import { storiesOf } from "@storybook/react";

import DeviceItem from "../DeviceItem";

const handleClick = () => alert("Clicked");

storiesOf("Components|DeviceItem", module).add("default", () => (
  <DeviceItem handleClick={handleClick}>Galaxy A50</DeviceItem>
));
