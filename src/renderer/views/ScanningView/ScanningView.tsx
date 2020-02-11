import React from "react";
import SyncRoundedIcon from "@material-ui/icons/SyncRounded";

import { ContentContainer, DeviceItemContainer } from "./styles";
import Layout from "../../components/Layout";
import ViewHeader from "../../components/ViewHeader";
import Button from "../../components/Button";
import Skeleton from "../../components/Skeleton";
import DeviceItem from "../../components/DeviceItem";
import { Device, DeviceId } from "../../types";

export interface Props {
  devices: Device[];
  isScanning?: boolean;
  isConnectingDeviceId?: DeviceId;
  handleConnectToDevice: (device: Device) => void;
  handleRescanForDevices: () => void;
}

const ScanningView: React.FC<Props> = ({
  devices,
  isScanning,
  isConnectingDeviceId,
  handleConnectToDevice,
  handleRescanForDevices
}) => {
  return (
    <Layout>
      <ViewHeader
        text={
          isConnectingDeviceId
            ? "Connecting..."
            : isScanning
            ? "Scanning for devices..."
            : "Discovered Devices"
        }
      >
        {!isScanning ? (
          <Button
            kind="secondary"
            endIcon={<SyncRoundedIcon />}
            disabled={Boolean(isConnectingDeviceId)}
            onClick={handleRescanForDevices}
          >
            RESCAN
          </Button>
        ) : null}
      </ViewHeader>

      <ContentContainer>
        {isScanning ? (
          <>
            <DeviceItemContainer>
              <Skeleton />
            </DeviceItemContainer>

            <DeviceItemContainer>
              <Skeleton />
            </DeviceItemContainer>
          </>
        ) : (
          devices.map(device => {
            const { deviceId, deviceName } = device;

            return (
              <DeviceItemContainer key={deviceId}>
                <DeviceItem
                  isLoading={isConnectingDeviceId === deviceId}
                  disabled={Boolean(isConnectingDeviceId)}
                  handleClick={() => handleConnectToDevice(device)}
                >
                  {deviceName || deviceId}
                </DeviceItem>
              </DeviceItemContainer>
            );
          })
        )}
      </ContentContainer>
    </Layout>
  );
};

export default ScanningView;
