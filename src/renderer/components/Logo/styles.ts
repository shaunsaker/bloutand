import styled from "styled-components";

import { colors } from "../../config";

export const Container = styled.div``;

export const Text = styled.span`
  font-family: "Muli", sans-serif;
  color: ${colors.dark};
`;

export const LogoText = styled(Text)`
  font-weight: bold;
  font-size: 24px;
`;

export const VersionText = styled(Text)`
  font-weight: normal;
  font-size: 12px;
`;
