import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  &.al-ct {
    align-items: center;
  }
  &.js-ct {
    justify-content: center;
  }
  &.js-sb {
    justify-content: space-between;
  }
`;

export const RowStars = styled(Row)`
  .icons {
    color: ${(props) => props.theme.colors.primary50};
  }
`;
