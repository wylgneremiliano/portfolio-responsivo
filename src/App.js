import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { draculaTheme, lightTheme } from "colors";
import { GlobalStyle } from "./globalStyles";

function App() {
  const [theme, setTheme] = useState("draculaTheme");
  return (
    <ThemeProvider theme={theme === "draculaTheme" ? draculaTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
