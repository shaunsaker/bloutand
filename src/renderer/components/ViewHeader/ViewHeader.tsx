import React, { ReactNode } from "react";

import { Container, Text, Border } from "./styles";

export interface Props {
  text: string;
  children?: ReactNode;
}

const ViewHeader: React.FC<Props> = ({ text, children }) => {
  return (
    <Container>
      <Text>{text}</Text>

      {children}

      <Border />
    </Container>
  );
};

export default ViewHeader;
