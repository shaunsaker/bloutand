import React from "react";
import { storiesOf } from "@storybook/react";

import DeviceItem from "../DeviceItem";

const handleClick = () => alert("Clicked");

storiesOf("Components|DeviceItem", module).add("default", () => (
  <DeviceItem name="Galaxy A50" handleClick={handleClick} />
));
