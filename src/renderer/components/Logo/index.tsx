import React from "react";

import { Container, Text, LogoText, VersionText } from "./styles";
import pkg from "../../../../package.json";

export interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <Container>
      <Text>
        <LogoText>bloutand</LogoText>

        <VersionText> v{pkg.version}</VersionText>
      </Text>
    </Container>
  );
};

export default Logo;
