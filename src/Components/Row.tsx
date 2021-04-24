import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.body50};

  &.al-ct {
    align-items: center;
  }
  &.js-ct {
    justify-content: center;
  }
`;
