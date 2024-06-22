import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";
import GlobalStyle from "./CSS/GlobalCss.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./CSS/ThemeCss.jsx";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
