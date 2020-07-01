import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    :root {
        --bg-primary: #F4F7FA;
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
    }

    .grass:hover{background-color: var(--grass)!important;color: #ffffff;}
    .fire:hover{background-color: var(--fire)!important;color: #ffffff;}
    .water:hover{background-color: var(--water)!important;color: #ffffff;}
    .bug:hover{background-color: var(--bug)!important;color: #ffffff;}
    .rock:hover{background-color: var(--rock)!important;color: #ffffff;}
    .normal:hover{background-color: var(--normal)!important;color: #ffffff;}
    .poison:hover{background-color: var(--poison)!important;color: #ffffff;}
    .ghost:hover{background-color: var(--ghost)!important;color: #ffffff;}
    .dark:hover{background-color: var(--dark) !important;color: #ffffff;}
    .electric:hover{background-color: var(--electric)!important;color: #ffffff;}
    .ground:hover{background-color: var(--ground)!important;color: #ffffff;}
    .fairy:hover{background-color: var(--fairy)!important;color: #ffffff;}
    .psychic:hover{background-color: var(--psychic)!important;color: #ffffff;}
    .fighting:hover{background-color: var(--fighting)!important;color: #ffffff;}

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
`;