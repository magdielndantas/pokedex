import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;

    grid-template-columns: auto 250px;
    grid-template-rows: 100%;

    grid-template-areas:
    ' main pokeList';

    height: 100%;

    background: var(--bg-primary) ;
    position: relative;
`;
