import { ipcRenderer } from "electron";

import { DeviceId } from "../../types";
import { services } from "../../config";
import convertDataViewToUint8Array from "./convertDataViewToUint8Array";

export interface WebBleProps {
  startScanning: (
    cb: (device: DeviceId, name: string) => void
  ) => Promise<void>;
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

/*
 * These variables are reassigned later so that we can access them in other methods of the WebBle
 */
let connectedDevice: BluetoothDevice | null = null;
let connectedServer: BluetoothRemoteGATTServer | null = null;
let handleDisconnect = () => {}; // eslint-disable-line

const WebBle: WebBleProps = {
  startScanning: cb => {
    return new Promise((resolve, reject) => {
      const options = {
        acceptAllDevices: true,
        optionalServices // attach these so that we don't get a not allowed error later
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
           * Make this device available to other methods of the WebBle
           */
          connectedDevice = device;

          if (device && device.gatt) {
            return device.gatt.connect();
          }
        })
        .then(server => {
          if (server) {
            /*
             * Make the server available to other methods of the WebBle
             */
            connectedServer = server;

            if (connectedDevice) {
              cb(connectedDevice.id, connectedDevice.name || "");
            }

            resolve();
          } else {
            reject("Server not found.");
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

      /*
       * Send the selected device to channelForSelectingDevice (created in main.ts)
       */
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
            return characteristic.startNotifications().then(() => {
              characteristic?.addEventListener(
                "characteristicvaluechanged",

                (event: any) => {
                  // FIXME: When using Event as the type, I get: "Property 'value' does not exist on type 'EventTarget'"
                  if (event.target) {
                    const { value } = event.target;
                    const uint8Array = convertDataViewToUint8Array(value);

                    cb(uint8Array);
                  }
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
