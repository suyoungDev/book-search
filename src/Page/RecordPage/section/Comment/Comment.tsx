import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StarBox from '../../../../Components/StarBox';
import { OkButton } from '../../../../Components/Button';
import { Container, CommentBox, ButtonWrapper } from './Comment.styles';
import { RootReducerType } from '../../../../reducer/store';
import { saveComment } from '../../../../actions/record.action';
import { openModal } from '../../../../actions/modal.action';

const Comment = () => {
  const [comment, setComment] = useState('');

  const update = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);

  const submit = () => {
    if (data?.isbn && data?.title && data?.image) {
      dispatch(saveComment(comment, data?.isbn, data?.image, data?.title));
    }
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
