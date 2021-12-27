import styled from "styled-components";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import colors from "colors";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: colors.pink,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.purple,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.pink,
      },
      "&.Mui-hover fieldset": {
        borderColor: colors.pink,
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
  background: ${colors.comment};
  color: ${colors.foreground};
  & .MuiInputLabel-root {
    color: ${colors.foreground};
  }
  :focus & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
    outline: none !important;
    border: 1px solid ${colors.pink};
  }
  & .MuiOutlinedInput-input {
    color: ${colors.foreground};
  }
`;
