import React from "react";
import { RouteComponentProps } from "@reach/router";

import DetailView from "./DetailView";

interface Props extends RouteComponentProps {}

const DetailViewContainer: React.FC<Props> = ({ ...props }) => {
  const onDisconnectFromDevice = () => {};
  const onSelectService = () => {};
  const onSelectCharacteristic = () => {};

  return (
    <DetailView
      device={{
        name: "",
        deviceId: ""
      }}
      services={[]}
      characteristics={[]}
      data={[]}
      handleDisconnectFromDevice={onDisconnectFromDevice}
      handleSelectService={onSelectService}
      handleSelectCharacteristic={onSelectCharacteristic}
      {...props}
    />
  );
};

export default DetailViewContainer;
