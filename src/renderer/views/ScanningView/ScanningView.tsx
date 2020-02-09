import React from "react";
import SyncRoundedIcon from "@material-ui/icons/SyncRounded";

import { DeviceListContainer, DeviceItemContainer } from "./styles";
import Layout from "../../components/Layout";
import ViewHeader from "../../components/ViewHeader";
import Button from "../../components/Button";
import Skeleton from "../../components/Skeleton";
import DeviceItem from "../../components/DeviceItem";
import { DeviceId } from "../../types";

export interface Props {
  devices: DeviceId[];
  isScanning?: boolean;
  handleConnectToDevice: () => void;
  handleRescanForDevices: () => void;
}

const ScanningView: React.FC<Props> = ({
  devices,
  isScanning,
  handleConnectToDevice,
  handleRescanForDevices
}) => {
  return (
    <Layout>
      <ViewHeader
        text={isScanning ? "Scanning for devices..." : "Discovered Devices"}
      >
        {!isScanning ? (
          <Button
            kind="secondary"
            endIcon={<SyncRoundedIcon />}
            onClick={handleRescanForDevices}
          >
            RESCAN
          </Button>
        ) : null}
      </ViewHeader>

      <DeviceListContainer>
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
          devices.map(deviceId => (
            <DeviceItemContainer key={deviceId}>
              <DeviceItem handleClick={() => handleConnectToDevice}>
                {deviceId}
              </DeviceItem>
            </DeviceItemContainer>
          ))
        )}
      </DeviceListContainer>
    </Layout>
  );
};

export default ScanningView;
