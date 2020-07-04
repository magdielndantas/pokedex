import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --bg-primary: #FAFBFD;
        --bg-secondary: #ffffff;
        --grass: #9bcc50;
        --fire: #ff9441;
        --water: #4592c4;
        --bug: #729f3f;
        --rock: #a38c21;
        --normal: #a4acaf;
        --poison: #b97fc9;
        --ghost: #7b62a3;
        --dark: #707070;
        --electric: #eed535;
        --ground: #f7de3f;
        --fairy: #fdb9e9;
        --psychic: #f366b9;
        --fighting: #d56723;

        --light-blue: #F3F8FE;
        --dark-blue: #24416A;
        --gray: #B3BCCA;


        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
    }

    .grass{color: var(--grass) !important;}
    .fire{color: var(--fire) !important;}
    .water{color: var(--water) !important;}
    .bug{color: var(--bug) !important;}
    .rock{color: var(--rock) !important;}
    .normal{color: var(--normal) !important;}
    .poison{color: var(--poison) !important;}
    .ghost{color: var(--ghost) !important;}
    .dark{color: var(--dark) !important;}
    .electric{color: var(--electric) !important;}
    .ground{color: var(--ground) !important;}
    .fairy{color: var(--fairy) !important;}
    .psychic{color: var(--psychic) !important;}
    .fighting{color: var(--fighting) !important;}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input{
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif
    }

    a{
        text-decoration: none;
    }
`;