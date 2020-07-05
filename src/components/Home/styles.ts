import styled from 'styled-components';

export const Container = styled.div`
    grid-area: main;

    background-color: var(--bg-primary);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 80%;
    height: 550px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    background-color: var(--bg-secondary);

    border-radius: 10px;

    >img{
        width: 30px;
        height: 300px;
    }

    >div.id h1{
        text-transform: capitalize;
        font-size: 68px;
        font-weight: 700;
        color: var(--dark-blue);
    }

    >div.id p{
        font-size: 22px;
        color: var(--gray);
    }

    >div.id p span{
        font-weight: 700;
    }
`;