import styled from 'styled-components';

export const Container = styled.div`
    grid-area: pokeList;
    position: relative;
    height: 100vh;
    
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);

    background: var(--bg-secondary);
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 4px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--bg-primary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track{
        background-color: var(--bg-secondary);

    }
    transition: all  0.8s;

    >div.gradient{
        height: 100px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    }
`;