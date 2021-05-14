import styled from 'styled-components';

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.colors.inputBg};
  width: 300px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 24px;
`;

export const InputBox = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  font-size: 0.8rem;
  padding: 0 0.8rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.ink40};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 1rem;
`;
