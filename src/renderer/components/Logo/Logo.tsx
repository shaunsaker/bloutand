import React from "react";

import { Container, Text, LogoText, VersionText } from "./styles";

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <Container>
      <Text>
        <LogoText>bloutand</LogoText>

        <VersionText> v1.0.0</VersionText>
      </Text>
    </Container>
  );
};

export default Logo;
