import styled from 'styled-components';

export const Container = styled.div`
    grid-area: main;

    background-color: var(--bg-secondary);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 80%;
    height: 550px;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;


    >img{
        width: 300px;
        height: 300px;
    }

    >div h1{
        text-transform: capitalize;
        font-size: 68px;
        font-weight: 700;
        color: var(--dark-blue);
    }

    >div p{
        font-size: 12px;
        color: var(--gray);
    }

    >div p span{
        font-weight: 700;
    }

`;