import React from "react";
import { storiesOf } from "@storybook/react";

import DetailView from "../DetailView";
import {
  devices,
  services,
  characteristics,
  deviceLogData
} from "../../../__mocks__";
import { Device, ServiceUuid, CharacteristicUuid } from "../../../types";

const handleSelectService = (serviceUuid: ServiceUuid) =>
  alert(`${serviceUuid} clicked.`);
const handleSelectCharacteristic = (characteristicUuid: CharacteristicUuid) =>
  alert(`${characteristicUuid} clicked.`);
const handleDisconnectFromDevice = (device: Device) =>
  alert(`Disconnect from ${device.deviceId} clicked.`);

storiesOf("Views|DetailView", module)
  .add("default", () => (
    <DetailView
      device={devices[0]}
      services={services}
      characteristics={characteristics}
      data={[]}
      handleSelectService={handleSelectService}
      handleSelectCharacteristic={handleSelectCharacteristic}
      handleDisconnectFromDevice={handleDisconnectFromDevice}
    />
  ))
  .add("with data", () => (
    <DetailView
      device={devices[0]}
      serviceUuid={services[0]}
      services={services}
      characteristicUuid={characteristics[0]}
      characteristics={characteristics}
      data={deviceLogData}
      handleSelectService={handleSelectService}
      handleSelectCharacteristic={handleSelectCharacteristic}
      handleDisconnectFromDevice={handleDisconnectFromDevice}
    />
  ));
