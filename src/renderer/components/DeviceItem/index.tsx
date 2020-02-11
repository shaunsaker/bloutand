import React, { ReactNode } from "react";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

import { Container, Text } from "./styles";
import Button from "../Button";

export interface Props {
  isLoading?: boolean;
  disabled?: boolean;
  handleClick: () => void;
  children: ReactNode;
}

const DeviceItem: React.FC<Props> = ({
  isLoading,
  disabled,
  handleClick,
  children
}) => {
  return (
    <Container>
      <Text>{children}</Text>

      <Button
        kind="primary"
        endIcon={!isLoading ? <ArrowForwardIcon /> : null}
        disabled={disabled || isLoading}
        onClick={handleClick}
      >
        {isLoading ? "Connecting..." : "Connect"}
      </Button>
    </Container>
  );
};

export default DeviceItem;
