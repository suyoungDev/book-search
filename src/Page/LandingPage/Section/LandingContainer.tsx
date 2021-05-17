import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { SmallWrapper } from '../../../Components/Wrapper';
import SearchPage from '../../SearchPage/SearchPage';
import BookStore from './BookStore';
import LoadingList from '../../SearchPage/module/LoadingList';

const LandingContainer: React.FC = () => {
  const { success, isLoading, isError } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <>
      {success && <SearchPage />}
      {isLoading && <LoadingList />}
      {!success && !isLoading && <BookStore />}
      {!success && isError && <SmallWrapper>에러가 발생했습니다.</SmallWrapper>}
    </>
  );
};

export default LandingContainer;
