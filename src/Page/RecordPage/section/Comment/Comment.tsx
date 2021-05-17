import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StarBox from '../../../../Components/StarBox';
import { OkButton } from '../../../../Components/Button';
import { Container, CommentBox, ButtonWrapper } from './Comment.styles';
import { RootReducerType } from '../../../../reducer/store';
import { addComment } from '../../../../actions/record.action';
import { openModal } from '../../../../actions/modal.action';
import { modifyComment } from '../../../../actions/record.action';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(0);

  const update = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const dispatch = useDispatch();
  const { payload } = useSelector(
    (state: RootReducerType) => state.modalReducer
  );

  const submit = () => {
    if (payload?.book) dispatch(addComment(comment, payload.book));
    if (payload?.id) dispatch(modifyComment(payload.id, comment, rate));
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
