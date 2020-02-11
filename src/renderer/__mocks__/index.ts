import { Device, Service, Characteristic, DataPoint } from "../types";

export const devices: Device[] = [
  { deviceId: "1", deviceName: "Galaxy A50" },
  { deviceId: "2", deviceName: "iPhone 7" },
  { deviceId: "3", deviceName: "Nexus 6s" }
];

export const services: Service[] = [
  {
    serviceName: "Battery Service",
    serviceUuid: ""
  },
  {
    serviceName: "Blood Pressure",
    serviceUuid: ""
  },
  {
    serviceName: "Device Information",
    serviceUuid: ""
  },
  {
    serviceName: "Heart Rate",
    serviceUuid: ""
  }
];

export const characteristics: Characteristic[] = [
  {
    characteristicName: "Battery Level",
    characteristicUuid: ""
  },
  {
    characteristicName: "Battery Level State",
    characteristicUuid: ""
  },
  {
    characteristicName: "Battery Power State",
    characteristicUuid: ""
  }
];

export const deviceLogData: DataPoint[] = [
  {
    x: 1,
    y: 1.0
  },
  {
    x: 2,
    y: 0.8
  },
  {
    x: 3,
    y: 0.7
  },
  {
    x: 4,
    y: 0.65
  }
];
