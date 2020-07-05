import styled from 'styled-components';

export const Container = styled.div`
    grid-area: pokeList;

    display: flex;
    flex-direction: column;
    position: relative;

    height: 100vh;
    
    box-shadow: 0px 0px 15px rgba(0,0,0, .2);
    background: var(--bg-secondary);

    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }

    >div.gradient{
        position: fixed;
        bottom: 0;
        height: 100px;
        width: 100%;
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }
`;