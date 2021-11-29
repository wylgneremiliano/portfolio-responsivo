import styled from "styled-components";
import { TextareaAutosize } from "@mui/base";

import { createTheme } from "@material-ui/core/styles";

export const InputCustom = styled(TextareaAutosize)`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: #222;
  color: #fff;

  & .MuiInputLabel-root {
    color: #e6e6e6;
    border-color: #2196f3;
  }

  & .MuiOutlinedInput-input {
    color: #e6e6e6;
  }
`;
