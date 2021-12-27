import { createTheme } from "@material-ui/core/styles";
import colors from "colors";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      multiline: {
        fontWeight: "bold",
        fontSize: "20px",
        color: colors.blue,
      },
    },
  },
});
export default theme;
