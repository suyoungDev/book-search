import styled from 'styled-components';

export const InputLabel = styled.label`
  input[type='radio'] {
    display: none;
  }

  .icons {
    cursor: pointer;
    font-size: 1.6rem;
    transition: color 0.5s ease;
  }
`;

export const RowStars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;

  align-items: center;
  justify-content: center;

  .icons {
    color: ${(props) => props.theme.colors.primary50};
  }
`;
