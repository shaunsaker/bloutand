import React from "react";
import { storiesOf } from "@storybook/react";

import ScanningView from "../ScanningView";
import { devices } from "../../../__mocks__";
import { DeviceId } from "../../../types";

const handleConnectToDevice = (deviceId: DeviceId) =>
  alert(`Connect to ${deviceId} clicked.`);
const handleRescanForDevices = () => alert("Rescan clicked.");

storiesOf("Views|ScanningView", module)
  .add("scanning", () => (
    <ScanningView
      devices={[]}
      isScanning
      handleConnectToDevice={handleConnectToDevice}
      handleRescanForDevices={handleRescanForDevices}
    />
  ))
  .add("default", () => (
    <ScanningView
      devices={devices}
      handleConnectToDevice={handleConnectToDevice}
      handleRescanForDevices={handleRescanForDevices}
    />
  ));
