import React from "react";

import Layout, { Props as LayoutProps } from "./Layout";

interface Props extends LayoutProps {}

const LayoutContainer: React.FC<Props> = () => {
  return <Layout />;
};

export default LayoutContainer;
