import React from "react";

import ViewHeader, { Props as ViewHeaderProps } from "./ViewHeader";

interface Props extends ViewHeaderProps {}

const ViewHeaderContainer: React.FC<Props> = ({ ...props }) => {
  return <ViewHeader {...props} />;
};

export default ViewHeaderContainer;
