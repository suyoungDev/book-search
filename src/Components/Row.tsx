import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;

  &.al-ct {
    align-items: center;
  }
  &.al-fs {
    align-items: flex-start;
  }
  &.js-ct {
    justify-content: center;
  }
  &.js-sb {
    justify-content: space-between;
  }
`;
