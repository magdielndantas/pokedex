import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    >img{
        width: 300px;
        height: 300px;
    }

    >div.info h1{
        text-transform: capitalize;
        font-size: 68px;
        font-weight: 700;
        color: var(--dark-blue);
    }

    >div.info p{
        font-size: 16px;
        color: var(--gray);
        text-transform: capitalize;
    }

    >div.info p span{
        font-weight: 700;
    }

    >div.info .stats{
        margin-top: 30px;

        width: 400px;
    }

    >div.info .stats h3{
        text-transform: capitalize;
        font-size: 20px;
        font-weight: 700;
        color: var(--dark-blue);
    }

    >div.info .stats p{
        margin-top: 6px;
        margin-bottom: 2px;
    }
`;