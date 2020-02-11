import React, { ReactNode } from "react";

import { Container, TextContainer, Text, Border } from "./styles";

export interface Props {
  text: string;
  children?: ReactNode;
}

const ViewHeader: React.FC<Props> = ({ text, children }) => {
  return (
    <Container>
      <TextContainer>
        <Text>{text}</Text>

        {children}
      </TextContainer>

      <Border />
    </Container>
  );
};

export default ViewHeader;
