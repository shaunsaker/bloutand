import React from "react";

import { Wrapper, StyledContainer, LogoContainer } from "./styles";
import Logo from "../Logo";

export interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <StyledContainer maxWidth="sm">{children}</StyledContainer>

      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Wrapper>
  );
};

export default Layout;
