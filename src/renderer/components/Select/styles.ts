import styled from "styled-components";
import { Select } from "@material-ui/core";

import { colors, rhythm } from "../../config";

export const StyledSelect = styled(Select)`
  .MuiFilledInput-input {
    padding: ${rhythm.vt / 2}px ${rhythm.hz * 2 - rhythm.hz / 6}px
      ${rhythm.vt / 2}px ${rhythm.hz}px;
    background-color: ${colors.primary};
    border-radius: ${rhythm.br}px ${rhythm.br}px 0 0;
    color: ${colors.light};
  }

  .MuiSelect-icon {
    color: ${colors.light};
  }
`;
