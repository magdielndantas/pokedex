import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 200px;

  background: var(--white);

  display: flex;
  flex-direction: column;
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

export const Search = styled.input`
  width: 350px;
  height: 50px;

  border-radius: 50px;

  background: var(--primary);

  color: var(--secondary);

  padding-left: 25px;
  margin-top: 15px;
`;