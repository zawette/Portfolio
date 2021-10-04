import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  code {
    background-color: ${(props) => props.theme.colors.background2};
    color:  ${(props) => props.theme.colors.primary1};
    border-radius: 0.3rem;
    padding: 4px 5px 5px;
    white-space: nowrap;
    font-size: 16px;
    line-height: 1.5;
}

pre code {
  white-space: inherit;
}

pre {
  margin:2rem;
  background-color: ${(props) => props.theme.colors.background2};
  padding: 5px;
  border-radius: 0.3em;
  // display:inline-block;
}


`;

export default GlobalStyles;
