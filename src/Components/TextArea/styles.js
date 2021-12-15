import styled from "styled-components";
import { TextareaAutosize } from "@mui/base";

export const InputCustom = styled(TextareaAutosize)`
  resize: none;
  width: 100%;
  padding: 120px 15px;
  padding-top: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: #222;
  color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  & .MuiInputLabel-root {
    color: #fff;
    border-color: #2196f3;
  }

  & .MuiOutlinedInput-input {
    color: #fff;
  }
`;
