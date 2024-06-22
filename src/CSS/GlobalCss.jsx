import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    ${reset}

    li,h1, h2,h3,p,label{
        font-family: "Noto Sans KR", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: ${(props) => props.theme.colors.white};
    }

    button, a{
        cursor:pointer;
    }

    ::-webkit-scrollbar {
        width: 3px;
       
    }

    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,1);
      
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.purple}; 
        border-radius: 5px;
       
    }
   

 
    
`;

export default GlobalStyle;
