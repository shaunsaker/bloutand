import React from "react";
import { storiesOf } from "@storybook/react";

import ScanningView from "../ScanningView";
import { devices } from "../../../__mocks__";
import { Device } from "../../../types";

const handleConnectToDevice = (device: Device) =>
  alert(`Connect to ${device.deviceId} clicked.`);
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
