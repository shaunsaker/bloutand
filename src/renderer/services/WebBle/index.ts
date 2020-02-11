import { ipcRenderer } from "electron";

import { DeviceId } from "../../types";
import { services } from "../../config";

type StartScanningCb = (device: DeviceId, name: string) => void;

export interface WebBleProps {
  startScanning: (cb: StartScanningCb) => Promise<void>;
  connect: (device: DeviceId, onDisconnect: () => void) => Promise<void>;
  read: (
    device: DeviceId,
    serviceUuid: string,
    characteristicUuid: string
  ) => Promise<Uint8Array>;
  subscribe: (
    device: DeviceId,
    serviceUuid: string,
    characteristicUuid: string,
    cb: (data: Uint8Array) => void
  ) => Promise<void>;
  disconnect: (device: DeviceId) => Promise<void>;
}

const optionalServices: number[] = services.map(({ serviceUuid }) =>
  parseInt(serviceUuid)
);
let connectedDevice: BluetoothDevice | null = null;
let connectedServer: BluetoothRemoteGATTServer | null = null;
let connectedCharacteristic: BluetoothRemoteGATTCharacteristic | null = null;
let handleDisconnect = () => {}; // TODO: Type this
const convertDataViewToUint8Array = (value: DataView) => {
  const { byteLength } = value;
  const uint8Array = new Uint8Array(byteLength);

  for (let i = 0; i < byteLength; i++) {
    uint8Array[i] = value.getUint8(i);
  }

  return uint8Array;
};

const WebBle: WebBleProps = {
  startScanning: cb => {
    return new Promise((resolve, reject) => {
      const options = {
        acceptAllDevices: true,
        optionalServices
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
  read: (device, serviceUuid, characteristicUuid) => {
    return new Promise((resolve, reject) => {
      const serviceUuidInt = parseInt(serviceUuid);
      const characteristicUuidInt = parseInt(characteristicUuid);

      if (connectedServer) {
        connectedServer
          .getPrimaryService(serviceUuidInt)
          .then(service => {
            return service.getCharacteristic(characteristicUuidInt);
          })
          .then(characteristic => {
            return characteristic.readValue();
          })
          .then(value => {
            const uint8Array = convertDataViewToUint8Array(value);

            resolve(uint8Array);
          })
          .catch(error => reject(error));
      }
    });
  },
  subscribe: (device, serviceUuid, characteristicUuid, cb) => {
    return new Promise((resolve, reject) => {
      const serviceUuidInt = parseInt(serviceUuid);
      const characteristicUuidInt = parseInt(characteristicUuid);

      if (connectedServer) {
        connectedServer
          .getPrimaryService(serviceUuidInt)
          .then(service => {
            return service.getCharacteristic(characteristicUuidInt);
          })
          .then(characteristic => {
            connectedCharacteristic = characteristic;

            return connectedCharacteristic.startNotifications().then(() => {
              connectedCharacteristic?.addEventListener(
                "characteristicvaluechanged",

                event => {
                  // @ts-ignore FIXME: Type this event (value does not exist apparently)
                  const { value } = event.target;
                  const uint8Array = convertDataViewToUint8Array(value);

                  cb(uint8Array);
                }
              );
            });
          })
          .catch(error => reject(error));
      }
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
