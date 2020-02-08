import React from "react";
import { Container } from "@material-ui/core";

import { Wrapper, LogoContainer } from "./styles";
import Logo from "../Logo";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container maxWidth="md">{children}</Container>

      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Wrapper>
  );
};

export default Layout;
