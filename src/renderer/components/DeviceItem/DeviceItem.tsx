import React, { ReactNode } from "react";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

import { Container, Text } from "./styles";
import Button from "../Button";

export interface Props {
  handleClick: () => void;
  children: ReactNode;
}

const DeviceItem: React.FC<Props> = ({ handleClick, children }) => {
  return (
    <Container>
      <Text>{children}</Text>

      <Button
        kind="primary"
        endIcon={<ArrowForwardIcon />}
        onClick={handleClick}
      >
        Connect
      </Button>
    </Container>
  );
};

export default DeviceItem;
