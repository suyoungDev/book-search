import React from 'react';
import styled from 'styled-components';
import StarBox from '../Search/StarBox';
import { OkButton } from '../../Components/Button';
import { Row } from '../../Components/Row';

const CommentBox = styled.textarea`
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: grid;
  grid-template-rows: 200px 1fr 1fr;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Comment = () => {
  return (
    <Container>
      <CommentBox autoFocus required placeholder='감상평을 남겨주세요.' />
      <StarBox className='al-ct js-ct' />
      <ButtonWrapper>
        <OkButton>기록</OkButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Comment;
