import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body, html {
    background-color: #F3F3F4;
    max-width: 100%;
    height: 100%;
    font-family: Quicksand, sans-serif;
  }


`;

export default GlobalStyles;
