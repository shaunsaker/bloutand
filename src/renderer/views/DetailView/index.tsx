import React from "react";

import DetailView, { Props as DetailViewProps } from "./DetailView";

interface Props extends DetailViewProps {}

const DetailViewContainer: React.FC<Props> = ({ ...props }) => {
  return <DetailView {...props} />;
};

export default DetailViewContainer;
