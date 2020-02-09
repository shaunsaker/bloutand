import React from "react";

import ScanningView, { Props as ScanningViewProps } from "./ScanningView";

interface Props extends ScanningViewProps {}

const ScanningViewContainer: React.FC<Props> = ({ ...props }) => {
  return <ScanningView {...props} />;
};

export default ScanningViewContainer;
