import styled from 'styled-components';

export const Container = styled.div`
    grid-area: pokeList;

    background: var(--bg-seondary);
    display: flex;
    flex-direction: column;

    background-color: var(--white-bg);
    overflow-y: scroll;
    transition: all  0.8s;
`;