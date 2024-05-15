import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    li, h1, h2{
        font-family: "Noto Sans KR", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyle;
