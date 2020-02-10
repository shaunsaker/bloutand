export type DeviceId = string;

export type Device = {
  deviceId: DeviceId;
  name: string;
};

export type ServiceUuid = string;

export type CharacteristicUuid = string;

export interface DataPoint {
  x: number;
  y: number;
}
