import React from "react";
import { storiesOf } from "@storybook/react";

import DeviceLog from "../DeviceLog";

const yAxisTitle = "Battery Level";
const data = [
  {
    x: 1,
    y: 1.0
  },
  {
    x: 2,
    y: 0.8
  },
  {
    x: 3,
    y: 0.7
  },
  {
    x: 4,
    y: 0.65
  }
];

storiesOf("Components|DeviceLog", module).add("default", () => (
  <DeviceLog yAxisTitle={yAxisTitle} data={data} />
));
