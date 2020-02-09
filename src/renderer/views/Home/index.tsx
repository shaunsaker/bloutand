import React from "react";

import Home, { Props as HomeProps } from "./Home";

interface Props extends HomeProps {}

const HomeContainer: React.FC<Props> = ({ ...props }) => {
  return <Home {...props} />;
};

export default HomeContainer;
