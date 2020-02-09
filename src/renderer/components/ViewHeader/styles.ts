import styled from "styled-components";

import { colors, rhythm } from "../../config";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rhythm.vt * 4}px 0 ${rhythm.vt}px;
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
