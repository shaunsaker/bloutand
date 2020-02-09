import React from "react";

import DeviceLog, { Props as DeviceLogProps } from "./DeviceLog";

interface Props extends DeviceLogProps {}

const DeviceLogContainer: React.FC<Props> = ({ ...props }) => {
  return <DeviceLog {...props} />;
};

export default DeviceLogContainer;
