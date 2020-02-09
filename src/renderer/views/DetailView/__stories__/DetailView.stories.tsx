import React from "react";
import { storiesOf } from "@storybook/react";

import DetailView from "../DetailView";
import {
  devices,
  services,
  characteristics,
  deviceLogData
} from "../../../__mocks__";
import { DeviceId, ServiceUuid, CharacteristicUuid } from "../../../types";

const handleSelectService = (serviceUuid: ServiceUuid) =>
  alert(`${serviceUuid} clicked.`);
const handleSelectCharacteristic = (characteristicUuid: CharacteristicUuid) =>
  alert(`${characteristicUuid} clicked.`);
const handleDisconnectFromDevice = (deviceId: DeviceId) =>
  alert(`Disconnect from ${deviceId} clicked.`);

storiesOf("Views|DetailView", module)
  .add("default", () => (
    <DetailView
      deviceId={devices[0]}
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
      deviceId={devices[0]}
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
