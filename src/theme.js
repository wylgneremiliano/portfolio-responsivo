import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      multiline: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#2196f3",
      },
    },
  },
});
export default theme;
