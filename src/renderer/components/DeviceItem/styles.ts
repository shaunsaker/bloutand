import styled from "styled-components";

import { rhythm } from "../../config";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-family: "Source Sans Pro", san-serif;
  font-size: 16px;
  margin-right: ${rhythm.hz}px;
`;
