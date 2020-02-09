import React from "react";

import PageHeader, { Props as PageHeaderProps } from "./PageHeader";

interface Props extends PageHeaderProps {}

const PageHeaderContainer: React.FC<Props> = ({ ...props }) => {
  return <PageHeader {...props} />;
};

export default PageHeaderContainer;
