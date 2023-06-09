import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />

    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);
