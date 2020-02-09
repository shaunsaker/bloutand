import styled, { keyframes } from "styled-components";

import { colors, rhythm } from "../../config";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 52px;
  background-color: ${colors.lightGrey};
  border-radius: ${rhythm.br}px;
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
`;
