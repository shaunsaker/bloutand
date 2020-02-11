import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import { ipcRenderer } from "electron";

import ScanningView from "./ScanningView";
import WebBle from "../../services/WebBle";
import { Device, DeviceId } from "../../types";

interface LocationProps extends Location {
  state: {
    shouldStartScanning?: boolean;
  };
}

interface Props extends RouteComponentProps<any> {
  location: LocationProps;
}

const ScanningViewContainer: React.FC<Props> = ({ location }) => {
  const history = useHistory();
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isConnectingDeviceId, setIsConnectingDeviceId] = useState<DeviceId>(
    ""
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [devices, setDevices] = useState<Device[]>([]);

  const scanForDevices = async () => {
    setErrorMessage(""); // reset any errors
    setIsScanning(true);

    try {
      await WebBle.startScanning((deviceId, deviceName) => {
        /*
         * On connect, push to the Detail view
         */
        history.push({
          pathname: "/device",
          state: {
            deviceId,
            deviceName
          }
        });

        setIsConnectingDeviceId("");
      });
    } catch (error) {
      setErrorMessage(error.message);
      setIsScanning(false);
    }
  };

  const onRescanForDevices = () => {
    scanForDevices();
  };

  const onConnectToDevice = async (device: Device) => {
    setIsConnectingDeviceId(device.deviceId);

    try {
      await WebBle.connect(device.deviceId, () => {
        console.log("Device disconnected.");
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
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
      isConnectingDeviceId={isConnectingDeviceId}
      errorMessage={errorMessage}
      handleRescanForDevices={onRescanForDevices}
      handleConnectToDevice={onConnectToDevice}
    />
  );
};

export default withRouter(ScanningViewContainer);
