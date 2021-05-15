import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  transition: all ease 0.5s;
`;

export const CirceButton = styled(Button)`
  height: 1.5rem;
  width: 1.6rem;
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

  &.record {
    margin: 0;
  }
`;

export const OkButton = styled(Button)`
  padding: 0.5em 1.2em;
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

export const CircleReverseButton = styled(CirceButton)`
  display: none;
  height: 1.3rem;
  width: 1.3rem;
  padding: 0.2rem;
  margin: 0 1rem 0 0;
  background-color: ${(props) => props.theme.colors.primary50};
  .icons {
    color: white;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  &.active {
    display: flex;
  }
`;
