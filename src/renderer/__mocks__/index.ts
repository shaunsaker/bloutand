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
    x: new Date(2020, 2, 11, 11, 50, 35),
    y: 100
  },
  {
    x: new Date(2020, 2, 11, 11, 52, 35),
    y: 80
  },
  {
    x: new Date(2020, 2, 11, 11, 53, 35),
    y: 70
  },
  {
    x: new Date(2020, 2, 11, 11, 59, 35),
    y: 65
  }
];
