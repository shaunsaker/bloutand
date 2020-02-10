import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

import HomeView from "./HomeView";

interface Props extends RouteComponentProps {}

const HomeViewContainer: React.FC<Props> = ({ ...props }) => {
  const history = useHistory();

  const onScanForDevices = async () => {
    history.push({
      pathname: "/devices",
      state: {
        shouldStartScanning: true
      }
    });
  };

  return <HomeView handleScanForDevices={onScanForDevices} {...props} />;
};

export default HomeViewContainer;
