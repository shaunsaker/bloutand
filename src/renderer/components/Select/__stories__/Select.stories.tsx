import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "../Select";

const options = [
  "Battery Service",
  "Blood Pressure",
  "Device Information",
  "Heart Rate"
];
const value = options[0];
const onChange = event => alert(`${event.target.value} clicked.`);

storiesOf("Components|Select", module).add("default", () => (
  <Select value={value} options={options} onChange={onChange} />
));
