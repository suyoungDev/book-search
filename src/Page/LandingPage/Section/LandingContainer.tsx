import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { SmallWrapper } from '../../../Components/Wrapper';
import BookStore from './BookStore';
import LoadingList from '../../SearchPage/module/LoadingList';
import SearchPage from '../../SearchPage/SearchPage';

const LandingContainer: React.FC = () => {
  const { success, isLoading, isError, data } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <>
      {isLoading && <LoadingList />}
      {success && <SearchPage />}
      {!isLoading && success && !data && (
        <SmallWrapper>데이터가 없습니다.</SmallWrapper>
      )}
      {!success && isError && <SmallWrapper>에러가 발생했습니다.</SmallWrapper>}
      {!success && !isLoading && !isError && <BookStore />}
    </>
  );
};

export default LandingContainer;
