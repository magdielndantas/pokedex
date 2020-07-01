import styled from 'styled-components';

export const Container = styled.div`
    height: 56px;

    display: flex;
    align-items: center;

    padding: 1rem;
    
    cursor: pointer;
    transition: 0.25s ease-in-out;

    &:hover{
        background: rgba(243, 248, 254, 1);
    }

    >h1{
        text-transform: capitalize;
        font-size: 16pt;
        font-weight: 700;
        color: #2F464C;
    }

`;