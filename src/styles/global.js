import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body{
    -webkit-font-smothing: antialiased;
  }

  /* body, input, button{
    font: 16px Roboto, sans-serif
  } */

  #app{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
  }

  table{
    border-spacing: 0;
  }
`;
