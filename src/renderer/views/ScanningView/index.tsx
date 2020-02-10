import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ipcRenderer } from "electron";

import ScanningView from "./ScanningView";
import WebBle from "../../services/WebBle";
import { Device } from "../../types";

interface LocationProps extends Location {
  state: {
    shouldStartScanning?: boolean;
  };
}

interface Props extends RouteComponentProps<any> {
  location: LocationProps;
}

const ScanningViewContainer: React.FC<Props> = ({ location }) => {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [devices, setDevices] = useState<Device[]>([]);

  const scanForDevices = () => {
    setIsScanning(true);

    WebBle.startScanning((deviceId, deviceName) => {
      // TODO: This is essentially onConnect
    });
  };

  const onRescanForDevices = () => {
    scanForDevices();
  };

  const onConnectToDevice = (device: Device) => {
    WebBle.connect(device.deviceId, () => {
      // TODO: Handle disconnect
    });
  };

  useEffect(() => {
    /*
     * Add an event listener to electron's renderer so that
     * we can listen for the bluetooth device list returned by WebBle
     */
    ipcRenderer.on("channelForBluetoothDeviceList", (_, deviceList) => {
      setDevices(deviceList);
      setIsScanning(false);
    });

    /*
     * If the flag shouldStartScanning is present on the route's history state
     * Start scanning
     * We need to do this because the web bluetooth api requires a user gesture to trigger any of it's * methods
     */
    if (location && location.state && location.state.shouldStartScanning) {
      scanForDevices();
    }
  }, []);

  return (
    <ScanningView
      devices={devices}
      isScanning={isScanning}
      handleRescanForDevices={onRescanForDevices}
      handleConnectToDevice={onConnectToDevice}
    />
  );
};

export default withRouter(ScanningViewContainer);
