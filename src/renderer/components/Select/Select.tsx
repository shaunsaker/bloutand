import React from "react";
import { SelectProps, MenuItem } from "@material-ui/core";

import { StyledSelect } from "./styles";

type Value = string;

export interface Props extends SelectProps {
  value: Value;
  options: Value[];
}

const Select: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <StyledSelect variant="filled" value={value} onChange={onChange}>
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default Select;
