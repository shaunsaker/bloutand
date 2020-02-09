import React from "react";

import pkg from "../../../../package.json";

import Logo from "./Logo";

interface Props {}

const LogoContainer: React.FC<Props> = ({ ...props }) => {
  return <Logo {...props} version={pkg.version} />;
};

export default LogoContainer;
