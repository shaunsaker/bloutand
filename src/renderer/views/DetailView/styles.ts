import styled from "styled-components";

import { rhythm } from "../../config";

export const ContentContainer = styled.div`
  margin-top: ${rhythm.vt * 2}px;
`;

export const SelectsContainer = styled.div`
  display: flex;
  margin-bottom: ${rhythm.vt * 2}px;
`;

export const SelectContainer = styled.div`
  margin-right: ${rhythm.hz}px;
`;

export const Text = styled.p`
  font-family: "Source Sans Pro", san-serif;
  font-size: 16px;
  color: #f44336;
  margin-bottom: ${rhythm.vt}px;
`;
