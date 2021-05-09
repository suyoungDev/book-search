import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CirceButton = styled(Button)`
  height: 2rem;
  width: 2rem;
  border-radius: 1.5rem;
  margin-right: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  .icons {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary50};
  }

  :hover {
    background-color: ${(props) => props.theme.colors.hoverButton};
  }
`;

export const OkButton = styled(Button)`
  width: 100px;
  padding: 0.5em 2em;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.primary50};
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 2px;

  :hover {
    background-color: ${(props) => props.theme.colors.primary60};
  }
`;
