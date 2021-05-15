import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(157px, 1fr);
  height: 100%;
  li {
    list-style: none;
  }
`;
