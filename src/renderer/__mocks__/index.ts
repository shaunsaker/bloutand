import { DeviceId, ServiceUuid, CharacteristicUuid, DataPoint } from "../types";

export const devices: DeviceId[] = ["Galaxy A50", "iPhone 7", "Nexus 6s"];

export const services: ServiceUuid[] = [
  "Battery Service",
  "Blood Pressure",
  "Device Information",
  "Heart Rate"
];

export const characteristics: CharacteristicUuid[] = [
  "Battery Level",
  "Battery Level State",
  "Battery Power State"
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
