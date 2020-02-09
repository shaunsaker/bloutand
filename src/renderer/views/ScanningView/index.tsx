import React from "react";
import { RouteComponentProps } from "@reach/router";

import ScanningView from "./ScanningView";

interface Props extends RouteComponentProps {}

const ScanningViewContainer: React.FC<Props> = ({ ...props }) => {
  const onRescanForDevices = () => {};
  const onConnectToDevice = () => {};

  return (
    <ScanningView
      devices={[]}
      handleRescanForDevices={onRescanForDevices}
      handleConnectToDevice={onConnectToDevice}
      {...props}
    />
  );
};

export default ScanningViewContainer;
