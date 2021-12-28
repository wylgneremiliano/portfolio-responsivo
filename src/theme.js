import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      multiline: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#3586ff",
      },
    },
  },
});
export default theme;
