import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageWrapper } from '../../Components/Wrapper';
import { RootReducerType } from '../../reducer/store';
import { loadComments } from '../../actions/record.action';
import RecordList from './section/RecordList';

const RecordPage = () => {
  const { isLoading, success } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  return (
    <PageWrapper>
      {isLoading && <div>가져오는 중</div>}
      {!success && <div>감상평을 먼저 남겨주세요.</div>}
      {success && <RecordList />}
    </PageWrapper>
  );
};

export default RecordPage;
