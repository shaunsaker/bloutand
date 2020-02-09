import React from "react";
import { SelectProps, MenuItem } from "@material-ui/core";

import { StyledSelect } from "./styles";

type Value = string;

export interface Props extends SelectProps {
  placeholder: string;
  value?: Value;
  options: Value[];
  handleChange: (value: Value) => void;
}

const Select: React.FC<Props> = ({
  placeholder,
  value = placeholder,
  options,
  handleChange,
  ...props
}) => {
  return (
    <StyledSelect
      variant="filled"
      value={value}
      onChange={(event: any) => handleChange(event.target.value)}
      {...props}
    >
      <MenuItem value={placeholder} disabled>
        {placeholder}
      </MenuItem>

      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default Select;
