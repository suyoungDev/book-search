import styled from 'styled-components';

export const InputContainer = styled.div`
  padding: 1em;
  background-color: ${(props) => props.theme.colors.inputBg};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 24px;

  .icons {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.ink30};
  }
`;

export const InputBox = styled.input`
  background-color: ${(props) => props.theme.colors.inputBg};
  border: none;
  outline: none;
  font-size: 0.8rem;
  padding: 0 0.8rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.ink40};
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  width: 2em;
  cursor: pointer;
  display: flex;
  justify-content: center;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    :hover {
      color: ${(props) => props.theme.colors.primary50};
    }

    transition: color ease 0.5s;
  }
`;
