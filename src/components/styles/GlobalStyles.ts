import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
  }

  * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;

      color: var(--primary)
  }

  html, body, #root{
      max-height: 100vh;
      max-width: 100vw;

      width: 100%;
      height: 100%;
  }

  *, button, input{
      border: 0;
      background: none;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html{
      background: var(--white);
  }
`;