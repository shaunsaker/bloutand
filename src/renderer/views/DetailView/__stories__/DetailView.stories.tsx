import React from "react";
import { storiesOf } from "@storybook/react";

import DetailView from "../DetailView";
import {
  devices,
  services,
  characteristics,
  deviceLogData
} from "../../../__mocks__";
import { Device, ServiceName, CharacteristicName } from "../../../types";

const serviceOptions = services.map(service => service.serviceName);
const characteristicsOptions = characteristics.map(
  characteristics => characteristics.characteristicName
);
const handleSelectService = (serviceName: ServiceName) =>
  alert(`${serviceName} clicked.`);
const handleSelectCharacteristic = (characteristicName: CharacteristicName) =>
  alert(`${characteristicName} clicked.`);
const handleDisconnectFromDevice = (device: Device) =>
  alert(`Disconnect from ${device.deviceId} clicked.`);

storiesOf("Views|DetailView", module)
  .add("default", () => (
    <DetailView
      device={devices[0]}
      services={serviceOptions}
      characteristics={characteristicsOptions}
      dataPoints={[]}
      handleSelectService={handleSelectService}
      handleSelectCharacteristic={handleSelectCharacteristic}
      handleDisconnectFromDevice={handleDisconnectFromDevice}
    />
  ))
  .add("with data points", () => (
    <DetailView
      device={devices[0]}
      selectedService={serviceOptions[0]}
      services={serviceOptions}
      selectedCharacteristic={characteristicsOptions[0]}
      characteristics={characteristicsOptions}
      dataPoints={deviceLogData}
      handleSelectService={handleSelectService}
      handleSelectCharacteristic={handleSelectCharacteristic}
      handleDisconnectFromDevice={handleDisconnectFromDevice}
    />
  ))
  .add("with error message", () => (
    <DetailView
      device={devices[0]}
      selectedService={serviceOptions[0]}
      services={serviceOptions}
      selectedCharacteristic={characteristicsOptions[0]}
      characteristics={characteristicsOptions}
      dataPoints={deviceLogData}
      errorMessage="Device does not support this characeristic."
      handleSelectService={handleSelectService}
      handleSelectCharacteristic={handleSelectCharacteristic}
      handleDisconnectFromDevice={handleDisconnectFromDevice}
    />
  ));
