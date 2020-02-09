import React from "react";

import DeviceItem, { Props as DeviceItemProps } from "./DeviceItem";

interface Props extends DeviceItemProps {}

const DeviceItemContainer: React.FC<Props> = ({ ...props }) => {
  return <DeviceItem {...props} />;
};

export default DeviceItemContainer;
