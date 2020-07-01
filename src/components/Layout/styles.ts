import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;

    grid-template-columns: auto 300px;
    grid-template-rows: 100%;

    grid-template-areas:
    'main pokeList';

    height: 100vh;

    position: relative;
`;
