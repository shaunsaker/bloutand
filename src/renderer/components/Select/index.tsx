import React from "react";

import Select, { Props as SelectProps } from "./Select";

interface Props extends SelectProps {}

const SelectContainer: React.FC<Props> = ({ ...props }) => {
  return <Select {...props} />;
};

export default SelectContainer;
