import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #F2F2F3;
    --secondary: #15181C;

    --white: #FEFEFE;

    --bug: #8cd842;     
    --dark: #707070;
    --ghost: #7b62a3;
    --electric: #ffe55f;
    --fairy: #fdb9e9;
    --fighting: #d56723;
    --fire: #ff9d44;
    --grass: #77e856;
    --ground: #ffce49;
    --normal: #cedae6;
    --poison: #b97fc9;
    --psychic: #cb63e6;
    --rock: #a78674;
    --water: #64b5f6;

    font-size: 60%;
  }



  .grass{background-color: var(--grass) !important;}
  .fire{background-color: var(--fire) !important;}
  .water{background-color: var(--water) !important;}
  .bug{background-color: var(--bug) !important;}
  .rock{background-color: var(--rock) !important;}
  .normal{background-color: var(--normal) !important;}
  .poison{background-color: var(--poison) !important;}
  .ghost{background-color: var(--ghost) !important;}
  .dark{background-color: var(--dark) !important;}
  .electric{background-color: var(--electric) !important;}
  .ground{background-color: var(--ground) !important;}
  .fairy{background-color: var(--fairy) !important;}
  .psychic{background-color: var(--psychic) !important;}
  .fighting{background-color: var(--fighting) !important;}
    
  * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;

      color: var(--secondary)
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
      background: var(--primary);
  }

  body,
  input,
  button,
  textarea {
    font-size: 1.6rem;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;