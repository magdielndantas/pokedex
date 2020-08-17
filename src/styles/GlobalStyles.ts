import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #f2f2f2;
    --secondary: #15181c;

    --white: #fefefe;
    --lightGray: #ebeff1;
    --red: #ef584a;

    --bug: #8cd842;     
    --dark: #707070;
    --electric: #ffe55f;
    --fairy: #fdb9e9;
    --fighting: #d56723;
    --flying: #64b5f6;
    --fire: #ff9d44;
    --ghost: #7b62a3;
    --grass: #77e856;
    --ground: #ffce49;
    --ice: #56d1d8;
    --normal: #cedae6;
    --poison: #b97fc9;
    --psychic: #cb63e6;
    --rock: #a78674;
    --steel: #e7f4ff;
    --water: #64b5f6;

    font-size: 60%;
  }



  .bug{background-color: var(--bug) !important;}
  .dark{background-color: var(--dark) !important;}
  .electric{background-color: var(--electric) !important;}
  .fairy{background-color: var(--fairy) !important;}
  .fighting{background-color: var(--fighting) !important;}
  .fire{background-color: var(--fire) !important;}
  .flying{background-color: var(--flying) !important;}
  .ghost{background-color: var(--ghost) !important;}
  .grass{background-color: var(--grass) !important;}
  .ground{background-color: var(--ground) !important;}
  .ice{background-color: var(--ice) !important;}
  .normal{background-color: var(--normal) !important;}
  .poison{background-color: var(--poison) !important;}
  .psychic{background-color: var(--psychic) !important;}
  .rock{background-color: var(--rock) !important;}
  .steel{background-color: var(--steel) !important;}
  .water{background-color: var(--water) !important;}
    
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