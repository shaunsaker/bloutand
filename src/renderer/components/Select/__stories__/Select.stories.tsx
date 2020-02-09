import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "../Select";

const options = [
  "Battery Service",
  "Blood Pressure",
  "Device Information",
  "Heart Rate"
];
const onChange = event => alert(`${event.target.value} clicked.`);

storiesOf("Components|Select", module).add("default", () => (
  <Select
    placeholder="Select a Service"
    options={options}
    onChange={onChange}
  />
));
