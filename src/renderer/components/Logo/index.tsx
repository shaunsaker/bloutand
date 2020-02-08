import React from "react";

import pkg from "../../../../package.json";

import Logo, { Props as LogoProps } from "./Logo";

interface Props extends LogoProps {}

const LogoContainer: React.FC<Props> = () => {
  return <Logo version={pkg.version} />;
};

export default LogoContainer;
