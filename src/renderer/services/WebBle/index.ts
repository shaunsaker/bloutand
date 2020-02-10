import { DeviceId } from "../../types";

type StartScanningCb = (device: DeviceId, name: string) => void;

export interface WebBleProps {
  startScanning: (cb: StartScanningCb) => Promise<void>;
  // connect: (device: DeviceId, onDisconnect: () => void) => Promise<void>;
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

const WebBle: WebBleProps = {
  startScanning: async cb => {
    const options = {
      acceptAllDevices: true
    };

    try {
      const { id, name = "" } = await navigator.bluetooth.requestDevice(
        options
      );

      cb(id, name);
    } catch (error) {
      console.log(error);
    }
  }
};

export default WebBle;
