import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 300px;

  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 4rem;
    font-weight: 900;

    > span {
      color: var(--red);
    }
  }
`;
