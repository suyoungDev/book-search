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

  if (isLoading) return <div>가져오는 중</div>;
  if (!success) return <div>감상평을 남겨주세요</div>;

  return (
    <PageWrapper>
      <RecordList />
    </PageWrapper>
  );
};

export default RecordPage;
