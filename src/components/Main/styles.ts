import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 3em;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LoadButton = styled.div`
  width: auto;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    width: calc(50px - 0px);
    height: calc(50px - 0px);

    border: 10px solid var(--red);

    border-radius: 50%;

    cursor: pointer;

    &:active {
      border-left: 10px solid var(--white);
      animation: ${rotate} 5s linear infinite;
    }
  }	
`;