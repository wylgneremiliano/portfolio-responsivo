import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const InputCustom = styled(TextField)`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: #222;
  color: #fff;
  & .MuiInputLabel-root {
    color: #e6e6e6;
  }

  & .MuiOutlinedInput-input {
    color: #e6e6e6;
  }
`;
