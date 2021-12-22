import styled from "styled-components";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#d863bb",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#d863bb",
      },
    },
  },
})(TextField);
export const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const InputCustom = styled(CssTextField)`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: #383a59;
  color: #fff;
  & .MuiInputLabel-root {
    color: #e6e6e6;
  }
  :focus & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
    outline: none !important;
    border: 1px solid #d863bb;
  }
  & .MuiOutlinedInput-input {
    color: #e6e6e6;
  }
`;
