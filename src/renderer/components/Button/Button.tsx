import React, { ReactNode } from "react";

import { StyledButton } from "./styles";

export interface Props {
  type: "primary" | "secondary";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  type,
  startIcon,
  endIcon,
  onClick,
  children
}) => {
  return (
    <StyledButton
      variant={type === "primary" ? "contained" : "outlined"}
      color={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
