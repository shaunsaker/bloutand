import React from "react";

import PageHeader, { Props as PageHeaderProps } from "./PageHeader";

interface Props extends PageHeaderProps {}

const PageHeaderContainer: React.FC<Props> = () => {
  return <PageHeader />;
};

export default PageHeaderContainer;
