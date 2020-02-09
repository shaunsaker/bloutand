import React from "react";

import HomeView, { Props as HomeViewProps } from "./HomeView";

interface Props extends HomeViewProps {}

const HomeViewContainer: React.FC<Props> = ({ ...props }) => {
  return <HomeView {...props} />;
};

export default HomeViewContainer;
