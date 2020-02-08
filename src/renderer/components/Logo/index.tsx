import React from "react";

import pkg from "../../../../package.json";

import Logo from "./Logo";

interface Props {}

const LogoContainer: React.FC<Props> = () => {
  return <Logo version={pkg.version} />;
};

export default LogoContainer;
