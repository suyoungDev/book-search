import React, { useState, useEffect, useCallback } from 'react';
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

  const dispatch = useDispatch();
  const { modalPayload } = useSelector(
    (state: RootReducerType) => state.modalReducer
  );
  const { payload } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );

  useEffect(() => {
    const idToChange = modalPayload?.id;

    if (idToChange) {
      const originalComment = payload.filter((item) => item.id === idToChange);
      const item = originalComment[0].comment;
      setComment(item);
    }
  }, [modalPayload, payload]);

  const update = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComment(event.target.value);
    },
    []
  );

  const rating = (ratingValue: number) => {
    setRate(ratingValue);
  };

  const submit = useCallback(() => {
    if (modalPayload?.book) dispatch(addComment(comment, modalPayload.book));
    if (modalPayload?.id)
      dispatch(modifyComment(modalPayload.id, comment, rate));
    dispatch(openModal(false));
  }, [modalPayload, dispatch, comment, rate]);

  return (
    <Container>
      <CommentBox
        autoFocus
        required
        placeholder='감상평을 남겨주세요.'
        value={comment}
        onChange={update}
      />
      <StarBox rate={rate} rating={rating} />
      <ButtonWrapper onClick={submit}>
        <OkButton>기록</OkButton>
      </ButtonWrapper>
    </Container>
  );
};

export default React.memo(Comment);
