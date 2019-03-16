import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Arial';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
  p, h1, h2, h3, h4 {
    font-weight: normal;
    margin: 0;
    color: ${props => props.theme.black};
    line-height: 3rem;
  }

  .hide-xs {
    display: none;
  }
  .jus-end {
    justify-self: flex-end;
  }

`;

export default GlobalStyle;
