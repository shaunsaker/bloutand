import React from "react";
import { ButtonProps } from "@material-ui/core";

import { StyledButton } from "./styles";

export interface Props extends ButtonProps {
  kind: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ kind, ...props }) => {
  return (
    <StyledButton
      variant={kind === "primary" ? "contained" : "outlined"}
      color={kind}
      {...props}
    />
  );
};

export default Button;
