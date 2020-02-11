import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

import DetailView from "./DetailView";
import WebBle from "../../services/WebBle";

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
  const { deviceId, deviceName } = (location && location.state) || {};

  const onDisconnectFromDevice = async () => {
    /*
     * We want to go back but we also want to tell the view
     * to start scanning. Therefore we can't use goBack().
     */
    await WebBle.disconnect(deviceId);

    history.push({
      pathname: "/devices",
      state: {
        shouldStartScanning: true
      }
    });
  };

  const onSelectService = () => {};

  const onSelectCharacteristic = () => {};

  return (
    <DetailView
      device={{
        deviceName,
        deviceId
      }}
      services={[]}
      characteristics={[]}
      data={[]}
      handleDisconnectFromDevice={onDisconnectFromDevice}
      handleSelectService={onSelectService}
      handleSelectCharacteristic={onSelectCharacteristic}
    />
  );
};

export default DetailViewContainer;
