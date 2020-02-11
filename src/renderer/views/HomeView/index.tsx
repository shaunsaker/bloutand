import React from "react";
import { useHistory } from "react-router-dom";

import HomeView from "./HomeView";

/*
 * Export the next route config to use in our tests
 */
export const nextRouteConfig = {
  pathname: "/devices",
  state: {
    shouldStartScanning: true
  }
};

interface Props {}

const HomeViewContainer: React.FC<Props> = ({ ...props }) => {
  const history = useHistory();

  const onScanForDevices = async () => {
    history.push(nextRouteConfig);
  };

  return <HomeView handleScanForDevices={onScanForDevices} {...props} />;
};

export default HomeViewContainer;
