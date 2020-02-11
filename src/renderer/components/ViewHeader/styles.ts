import styled from "styled-components";

import { colors, rhythm } from "../../config";

export const Container = styled.div`
  position: relative;

  padding: ${rhythm.vt * 4}px 0 ${rhythm.vt}px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px; /* use this so when button children are added the height remains the same and looks more graceful */
`;

export const Text = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;
  color: ${colors.dark};
  margin: 0;
`;

export const Border = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: ${colors.lightGrey};
`;
