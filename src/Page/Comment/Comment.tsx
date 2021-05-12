import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StarBox from '../Search/StarBox';
import { OkButton } from '../../Components/Button';
import { Container, CommentBox, ButtonWrapper } from './Comment.styles';
import { RootReducerType } from '../../reducer/store';
import { saveComment } from '../../actions/record.action';
import { openModal } from '../../actions/modal.action';

const Comment = () => {
  const [comment, setComment] = useState('');

  const update = (event: any) => {
    setComment(event.target.value);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);

  const submit = () => {
    dispatch(saveComment(comment, data?.isbn));
    dispatch(openModal(false));
  };

  return (
    <Container>
      <CommentBox
        autoFocus
        required
        placeholder='감상평을 남겨주세요.'
        value={comment}
        onChange={update}
      />
      <StarBox className='al-ct js-ct' />
      <ButtonWrapper onClick={submit}>
        <OkButton>기록</OkButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Comment;
