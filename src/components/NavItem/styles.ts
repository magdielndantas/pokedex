import styled from 'styled-components';

export const Container = styled.div`
    height: 56px;

    display: flex;
    align-items: center;

    padding: 1rem;
    
    cursor: pointer;
    transition: 0.25s ease-in-out;

    &:hover{
        background: var(--light-blue);
    }

    >div h1{
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 700;
        color: var(--dark-blue);
    }

    >div p{
        font-size: 12px;
        color: var(--gray);

        font-weight: 700;
    }

    >img{
        height: 56px;
        width: 56px;
    }

`;