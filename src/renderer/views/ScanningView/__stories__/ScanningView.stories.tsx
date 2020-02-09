import React from "react";
import { storiesOf } from "@storybook/react";

import ScanningView from "../ScanningView";
import { DeviceId } from "../../../types";

const devices: DeviceId[] = ["Galaxy A50", "iPhone 7", "Nexus 6s"];
const handleConnectToDevice = () => alert("Connect clicked.");
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
