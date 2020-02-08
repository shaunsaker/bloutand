import React, { ReactNode } from "react";

import { Button } from "./styles";

interface Props {
  type: "primary" | "secondary";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick: () => void;
  children: ReactNode;
}

const ButtonComponent: React.FC<Props> = ({
  type,
  startIcon,
  endIcon,
  onClick,
  children
}) => {
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      color={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
