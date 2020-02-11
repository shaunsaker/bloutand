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
          console.log("Connection received:", device);
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
            console.log("Gatt server present.");

            return device.gatt.connect();
          }
        })
        .then(server => {
          console.log("Gatt server connected.");

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
    console.log("Connecting to", device);

    return new Promise(resolve => {
      handleDisconnect = onDisconnect;

      ipcRenderer.send("channelForSelectingDevice", device);

      resolve();
    });
  },
  read: (device, serviceUuid, characteristicUuid) => {
    console.log("Reading from", device, serviceUuid, characteristicUuid);

    return new Promise(resolve => {
      const serviceUuidInt = parseInt(serviceUuid);
      const characteristicUuidInt = parseInt(characteristicUuid);

      if (connectedServer) {
        connectedServer
          .getPrimaryService(serviceUuidInt)
          .then(service => {
            console.log("Service found. Getting characteristic...");

            return service.getCharacteristic(characteristicUuidInt);
          })
          .then(characteristic => {
            console.log("Characteristic found. Reading value...");

            return characteristic.readValue();
          })
          .then(value => {
            console.log("Read value", value);
            const uint8Array = convertDataViewToUint8Array(value);

            resolve(uint8Array);
          })
          .catch(error => console.log(error));
      }
    });
  },
  subscribe: (device, serviceUuid, characteristicUuid, cb) => {
    console.log("Subscribing to", device, serviceUuid, characteristicUuid);

    return new Promise(resolve => {
      const serviceUuidInt = parseInt(serviceUuid);
      const characteristicUuidInt = parseInt(characteristicUuid);

      if (connectedServer) {
        connectedServer
          .getPrimaryService(serviceUuidInt)
          .then(service => {
            console.log("Service found. Getting characteristic...");

            return service.getCharacteristic(characteristicUuidInt);
          })
          .then(characteristic => {
            console.log("Characteristic found.");

            connectedCharacteristic = characteristic;

            return connectedCharacteristic.startNotifications().then(() => {
              console.log("Notifications started.");

              connectedCharacteristic?.addEventListener(
                "characteristicvaluechanged",

                event => {
                  console.log("Received value from subscribe", event);

                  // @ts-ignore FIXME: Type this event (value does not exist apparently)
                  const { value } = event.target;
                  const uint8Array = convertDataViewToUint8Array(value);

                  cb(uint8Array);
                }
              );
            });
          })
          .catch(error => console.log(error));
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
