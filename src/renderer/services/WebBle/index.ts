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
  disconnect: (device: DeviceId) => Promise<void>;
}

let connectedDevice: BluetoothDevice | null = null;
let connectedServer: BluetoothRemoteGATTServer | null = null;
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
          /*
           * Once a device is selected (handled by connect method)
           * Connect to it
           */
          device.addEventListener("gattserverdisconnected", handleDisconnect);

          /*
           * Make this available globally
           */
          connectedDevice = device;

          if (device && device.gatt) {
            return device.gatt.connect();
          }
        })
        .then(server => {
          if (server) {
            connectedServer = server;

            if (connectedDevice) {
              cb(connectedDevice.id, connectedDevice.name || "");
            }

            resolve();
          }
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
  },
  disconnect: device => {
    return new Promise(resolve => {
      /*
       * Disconnect from the device if the gatt server is available
       * And if it is connected
       * And if the device id matches
       */
      if (
        connectedServer &&
        connectedServer.connected &&
        connectedServer.device.id === device
      ) {
        connectedServer.disconnect();
      }

      connectedDevice = null;
      connectedServer = null;

      resolve();
    });
  }
};

export default WebBle;
