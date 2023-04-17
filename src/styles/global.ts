import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textaream button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    height: 50px;
    background-color: #E82D92;
    -webkit-border-radius: 3px;
  }
`;
