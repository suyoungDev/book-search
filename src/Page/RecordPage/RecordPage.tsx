import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageWrapper, SmallWrapper } from '../../Components/Wrapper';
import { RootReducerType } from '../../reducer/store';
import { loadComments } from '../../actions/record.action';
import MainPage from '../../Components/MainPage';
import RecordContainer from './RecordContainer';

const RecordPage = () => {
  const { isLoading, success } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  return (
    <MainPage>
      {isLoading && <SmallWrapper>가져오는 중...</SmallWrapper>}
      {!isLoading && !success && (
        <SmallWrapper>오류가 발생했습니다.</SmallWrapper>
      )}
      {!isLoading && success && <RecordContainer />}
    </MainPage>
  );
};

export default RecordPage;
