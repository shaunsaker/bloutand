import React from "react";

import { Container, Text, LogoText, VersionText } from "./styles";

export interface Props {
  version: string;
}

const Logo: React.FC<Props> = ({ version }) => {
  return (
    <Container>
      <Text>
        <LogoText>bloutand</LogoText>

        <VersionText> v{version}</VersionText>
      </Text>
    </Container>
  );
};

export default Logo;
