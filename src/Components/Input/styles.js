import styled from "styled-components";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

// const CssTextField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: (props) => props.theme.pink,
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: (props) => props.theme.purple,
//     },
//     "& .MuiOutlinedInput-root": {
//       "&.Mui-focused fieldset": {
//         borderColor: (props) => props.theme.pink,
//       },
//       "&.Mui-hover fieldset": {
//         borderColor: (props) => props.theme.pink,
//       },
//     },
//   },
// })(TextField);
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
