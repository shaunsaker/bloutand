import React from "react";

import Skeleton, { Props as SkeletonProps } from "./Skeleton";

interface Props extends SkeletonProps {}

const SkeletonContainer: React.FC<Props> = ({ ...props }) => {
  return <Skeleton {...props} />;
};

export default SkeletonContainer;
