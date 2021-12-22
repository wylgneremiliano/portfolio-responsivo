import styled from "styled-components";
import { TextareaAutosize } from "@mui/base";

export const InputCustom = styled.textarea`
  resize: none;
  width: 100%;
  padding: 120px 15px;
  padding-top: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: #383a59;
  color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  :focus {
    outline: none !important;
    border: 1px solid #d863bb;
  }
`;
