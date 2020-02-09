import { DeviceId, ServiceUuid, CharacteristicUuid } from "../types";

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
