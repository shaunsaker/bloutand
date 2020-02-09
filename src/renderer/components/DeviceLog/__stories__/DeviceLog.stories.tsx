import React from "react";
import { storiesOf } from "@storybook/react";

import DeviceLog from "../DeviceLog";
import { deviceLogData } from "../../../__mocks__";

const yAxisTitle = "Battery Level";

storiesOf("Components|DeviceLog", module).add("default", () => (
  <DeviceLog yAxisTitle={yAxisTitle} data={deviceLogData} />
));
