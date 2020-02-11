export type DeviceId = string;

export type Device = {
  deviceId: DeviceId;
  deviceName: string;
};

export type ServiceName = string;

export type ServiceUuid = string;

export type CharacteristicName = string;

export type CharacteristicUuid = string;

export type Service = {
  serviceUuid: ServiceUuid;
  serviceName: ServiceName;
};

export type Characteristic = {
  characteristicUuid: CharacteristicUuid;
  characteristicName: CharacteristicName;
};

export interface DataPoint {
  x: number | string | Date;
  y: number;
}
