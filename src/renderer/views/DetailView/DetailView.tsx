import React from "react";
import { Cancel as CancelIcon } from "@material-ui/icons";

import { ContentContainer, SelectsContainer, SelectContainer } from "./styles";
import Layout from "../../components/Layout";
import ViewHeader from "../../components/ViewHeader";
import Button from "../../components/Button";
import Select from "../../components/Select";
import DeviceLog from "../../components/DeviceLog";
import {
  Device,
  ServiceUuid,
  CharacteristicUuid,
  DataPoint
} from "../../types";

export interface Props {
  device: Device;
  serviceUuid?: ServiceUuid;
  services: ServiceUuid[];
  characteristicUuid?: CharacteristicUuid;
  characteristics: CharacteristicUuid[];
  data: DataPoint[];
  handleSelectService: (serviceUuid: ServiceUuid) => void;
  handleSelectCharacteristic: (characteristicUuid: CharacteristicUuid) => void;
  handleDisconnectFromDevice: (device: Device) => void;
}

const DetailView: React.FC<Props> = ({
  device,
  serviceUuid,
  services,
  characteristicUuid,
  characteristics,
  data,
  handleSelectService,
  handleSelectCharacteristic,
  handleDisconnectFromDevice
}) => {
  return (
    <Layout>
      <ViewHeader text={device.deviceName}>
        <Button
          kind="secondary"
          endIcon={<CancelIcon />}
          onClick={() => handleDisconnectFromDevice(device)}
        >
          Disconnect
        </Button>
      </ViewHeader>

      <ContentContainer>
        <SelectsContainer>
          <SelectContainer>
            <Select
              placeholder="Select a Service"
              value={serviceUuid}
              options={services}
              handleChange={handleSelectService}
            />
          </SelectContainer>

          <SelectContainer>
            <Select
              placeholder="Select a Characteristic"
              value={characteristicUuid}
              options={characteristics}
              handleChange={handleSelectCharacteristic}
            />
          </SelectContainer>
        </SelectsContainer>

        {data.length ? (
          <DeviceLog yAxisTitle={characteristicUuid || ""} data={data} />
        ) : null}
      </ContentContainer>
    </Layout>
  );
};

export default DetailView;
