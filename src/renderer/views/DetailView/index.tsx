import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

import DetailView from "./DetailView";
import WebBle from "../../services/WebBle";
import { services, characteristics } from "../../config";
import {
  ServiceName,
  CharacteristicName,
  DataPoint,
  Service,
  Characteristic
} from "../../types";

interface Data {
  value: number;
  timestamp: Date;
}

interface LocationProps extends Location {
  state: {
    deviceId: string;
    deviceName: string;
  };
}

interface Props extends RouteComponentProps<any> {
  location: LocationProps;
}

const DetailViewContainer: React.FC<Props> = ({ location }) => {
  const history = useHistory();
  const [selectedService, setSelectedService] = useState<string>();
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<
    string
  >();
  const [rawData, setRawData] = useState<Uint8Array>(new Uint8Array());
  const [data, setData] = useState<Data[]>([]);
  const { deviceId, deviceName } = (location && location.state) || {};
  const servicesOptions = services.map(service => service.serviceName);
  const characteristicsOptions = characteristics.map(
    characteristic => characteristic.characteristicName
  );

  /*
   * Convert the raw data to an array of data points that our graph expects
   */
  const dataPoints: DataPoint[] = data.map(({ value, timestamp }) => {
    return {
      x: timestamp,
      y: value
    };
  });

  const goBack = (shouldStartScanning: boolean) => {
    history.push({
      pathname: "/devices",
      state: {
        shouldStartScanning
      }
    });
  };

  useEffect(() => {
    /*
     * If there is no location state on mount
     * Go back, we need to choose a device to connect to
     */
    if (!deviceId) {
      goBack(false);
    }
  }, []);

  useEffect(() => {
    /*
     * When raw data updates, parse it add it to data for use in our graph
     * NOTE: I've done this because for some reason the callback in WebBle.subscibe
     * does not get updated data state values
     */
    const array: number[] = [].slice.call(rawData).map(value => value);
    const newData: Data[] = array.map(value => {
      return {
        value,
        timestamp: new Date()
      };
    });
    const existingData = data;
    const allData = [...existingData, ...newData];

    setData(allData);
  }, [rawData]);

  const onDisconnectFromDevice = async () => {
    /*
     * We want to go back but we also want to tell the view
     * to start scanning. Therefore we can't use goBack().
     */
    await WebBle.disconnect(deviceId);

    goBack(true);
  };

  const onSelectService = (serviceName: ServiceName) => {
    setSelectedService(serviceName);
  };

  const onSelectCharacteristic = async (
    characteristicName: CharacteristicName
  ) => {
    setSelectedCharacteristic(characteristicName);

    /*
     * Get the selected service uuid
     */
    const { serviceUuid }: Service = services.filter(
      service => service.serviceName === selectedService
    )[0];

    /*
     * Get the selected characteristic uuid
     * NOTE: Use characteristic name from arg
     * because state will not be set yet
     */
    const { characteristicUuid }: Characteristic = characteristics.filter(
      characteristic => characteristic.characteristicName === characteristicName
    )[0];

    /*
     * Read value first
     */
    const uint8Array = await WebBle.read(
      deviceId,
      serviceUuid,
      characteristicUuid
    );

    setRawData(uint8Array);

    /*
     * Subscribe to future notifications
     */
    WebBle.subscribe(deviceId, serviceUuid, characteristicUuid, uint8Array => {
      setRawData(uint8Array);
    });
  };

  return (
    <DetailView
      device={{
        deviceName,
        deviceId
      }}
      selectedService={selectedService}
      services={servicesOptions}
      selectedCharacteristic={selectedCharacteristic}
      characteristics={characteristicsOptions}
      dataPoints={dataPoints}
      handleDisconnectFromDevice={onDisconnectFromDevice}
      handleSelectService={onSelectService}
      handleSelectCharacteristic={onSelectCharacteristic}
    />
  );
};

export default DetailViewContainer;
