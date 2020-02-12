import styled from "styled-components";

import { rhythm } from "../../config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const TitleText = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Text = styled.p`
  font-family: "Source Sans Pro", san-serif;
  font-size: 16px;
  margin-bottom: ${rhythm.vt * 2}px;
`;
