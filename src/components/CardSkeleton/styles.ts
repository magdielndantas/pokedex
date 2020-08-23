import styled from 'styled-components';

export const Container = styled.article`
  /* width: 240px;
  height: 310px; */
  width: 150px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.25rem 1.25rem;

  background: var(--white);
  
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 197, .6);
  
  transition: all .25s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168,182,191,.6);
    transform: translateY(-1px);
  }

  > h1 {
    text-transform: capitalize;
    font-size: 2rem;

    margin-top: .6rem;

    height: 20px;
    width: 100px;
  }
`;

export const ImageContainer = styled.header`
  width: 100%;
  height: 50%;

  /* padding: 2em 0 1.85em 0; */
  padding: 0em 0 0.85em 0;
  border-radius: 4px 4px 0 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: var(--primary);
`;

export const TypesContainer = styled.div`
  display: flex;

  margin-top: .6rem;

  > span {
    height: 20px;
    width: 60px;
  }

`;
