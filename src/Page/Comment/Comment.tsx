import React from 'react';
import styled from 'styled-components';
import StarBox from '../Search/StarBox';
import { OkButton } from '../../Components/Button';

const CommentBox = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  outline: none;
  border: 2px solid ${(props) => props.theme.colors.hoverBorder};
  border-radius: 0.5rem;
  padding: 0.8rem;
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
      <CommentBox autoFocus required />
      <StarBox className='al-ct js-ct' />
      <ButtonWrapper>
        <OkButton>확인</OkButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Comment;
