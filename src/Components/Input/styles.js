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
  background: ${(props) => props.theme.comment};
  color: ${(props) => props.theme.foreground};
  & .MuiInputLabel-root {
    color: ${(props) => props.theme.foreground};
  }
  :focus & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.pink};
  }
  & .MuiOutlinedInput-input {
    color: ${(props) => props.theme.foreground};
  }
`;
