import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    li,h1, h2,p{
        font-family: "Noto Sans KR", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: ${(props) => props.theme.colors.white};
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;
