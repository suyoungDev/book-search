import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  height: 100%;
  padding: 2rem 0;

  li {
    list-style: none;
  }
`;
