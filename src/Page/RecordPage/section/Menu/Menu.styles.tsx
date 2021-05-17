import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.body60};
  color: ${(props) => props.theme.colors.ink50};

  ul {
    list-style: none;
  }

  li:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  box-shadow: 0 0px 6px 1px ${(props) => props.theme.colors.border};
`;

export const Module = styled.div`
  padding: 0.6rem 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.85rem;

  .icons {
    margin-right: 0.5rem;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.body50};
  }
`;
