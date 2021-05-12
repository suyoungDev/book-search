import styled from 'styled-components';

export const CommentBox = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  outline: none;
  border: 2px solid ${(props) => props.theme.colors.hoverBorder};
  border-radius: 0.5rem;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.colors.body50};
  color: ${(props) => props.theme.colors.ink50};
  font-size: 1.2rem;

  ::placeholder {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: grid;
  grid-template-rows: 200px 1fr 1fr;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
