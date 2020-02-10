import { ipcRenderer } from "electron";

import { DeviceId } from "../../types";

type StartScanningCb = (device: DeviceId, name: string) => void;

export interface WebBleProps {
  startScanning: (cb: StartScanningCb) => Promise<void>;
  connect: (device: DeviceId, onDisconnect: () => void) => Promise<void>;
  // read: (
  //   device: DeviceId,
  //   serviceUuid: string,
  //   characteristicUuid: string
  // ) => Promise<Uint8Array>;
  // subscribe: (
  //   device: DeviceId,
  //   serviceUuid: string,
  //   characteristicUuid: string,
  //   cb: (data: Uint8Array) => void
  // ) => Promise<void>;
  // disconnect: (device: DeviceId) => Promise<void>;
}

let handleDisconnect = () => {}; // TODO: Type this

const WebBle: WebBleProps = {
  startScanning: cb => {
    return new Promise((resolve, reject) => {
      const options = {
        acceptAllDevices: true
      };

      navigator.bluetooth
        .requestDevice(options)
        .then(device => {
          const { id, name = "" } = device;

          device.addEventListener("gattserverdisconnected", handleDisconnect);

          device && device.gatt && device.gatt.connect();

          cb(id, name);

          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  connect: (device, onDisconnect) => {
    return new Promise(resolve => {
      handleDisconnect = onDisconnect;

      ipcRenderer.send("channelForSelectingDevice", device);

      resolve();
    });
  }
};

export default WebBle;
