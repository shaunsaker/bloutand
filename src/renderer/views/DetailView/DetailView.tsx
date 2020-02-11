import React from "react";
import { Cancel as CancelIcon } from "@material-ui/icons";

import {
  ContentContainer,
  Text,
  SelectsContainer,
  SelectContainer
} from "./styles";
import Layout from "../../components/Layout";
import ViewHeader from "../../components/ViewHeader";
import Button from "../../components/Button";
import Select from "../../components/Select";
import DeviceLog from "../../components/DeviceLog";
import {
  Device,
  ServiceName,
  CharacteristicName,
  DataPoint
} from "../../types";

export interface Props {
  device: Device;
  selectedService?: ServiceName;
  services: ServiceName[];
  selectedCharacteristic?: CharacteristicName;
  characteristics: CharacteristicName[];
  dataPoints: DataPoint[];
  errorMessage?: string;
  handleSelectService: (selectedService: ServiceName) => void;
  handleSelectCharacteristic: (
    selectedCharacteristic: CharacteristicName
  ) => void;
  handleDisconnectFromDevice: (device: Device) => void;
}

const DetailView: React.FC<Props> = ({
  device,
  selectedService,
  services,
  selectedCharacteristic,
  characteristics,
  dataPoints,
  errorMessage,
  handleSelectService,
  handleSelectCharacteristic,
  handleDisconnectFromDevice
}) => {
  return (
    <Layout>
      <ViewHeader text={device.deviceName || device.deviceId}>
        <Button
          kind="secondary"
          endIcon={<CancelIcon />}
          onClick={() => handleDisconnectFromDevice(device)}
        >
          Disconnect
        </Button>
      </ViewHeader>

      <ContentContainer>
        {errorMessage ? <Text>Error: {errorMessage}</Text> : null}

        <SelectsContainer>
          <SelectContainer>
            <Select
              placeholder="Select a Service"
              value={selectedService}
              options={services}
              handleChange={handleSelectService}
            />
          </SelectContainer>

          <SelectContainer>
            <Select
              placeholder="Select a Characteristic"
              value={selectedCharacteristic}
              options={characteristics}
              handleChange={handleSelectCharacteristic}
            />
          </SelectContainer>
        </SelectsContainer>

        {dataPoints.length ? (
          <DeviceLog
            yAxisTitle={selectedCharacteristic || ""}
            data={dataPoints}
          />
        ) : null}
      </ContentContainer>
    </Layout>
  );
};

export default DetailView;
