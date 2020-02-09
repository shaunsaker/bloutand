import React from "react";

import { Container, Text } from "./styles";
import Button from "../Button";

export interface Props {
  name: string;
  handleClick: () => void;
}

const DeviceItem: React.FC<Props> = ({ name, handleClick }) => {
  return (
    <Container>
      <Text>{name}</Text>

      <Button type="primary" onClick={handleClick}>
        Connect
      </Button>
    </Container>
  );
};

export default DeviceItem;
