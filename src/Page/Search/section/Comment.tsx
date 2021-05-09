import React from 'react';
import styled from 'styled-components';
import StarBox from '../StarBox';

const CommentBox = styled.textarea``;
const Container = styled.div``;

interface Props {}

const Comment: React.FC<Props> = () => {
  return (
    <Container>
      <CommentBox />
      <StarBox />
    </Container>
  );
};

export default Comment;
