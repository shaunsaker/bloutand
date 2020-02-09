import styled from "styled-components";
import { Container } from "@material-ui/core";

import { rhythm } from "../../config";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const StyledContainer = styled(Container)`
  height: 100%;
`;

export const LogoContainer = styled.div`
  position: fixed;
  bottom: ${rhythm.vt}px;
  right: ${rhythm.hz}px;
`;
