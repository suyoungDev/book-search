import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { SmallWrapper } from '../../../Components/Wrapper';
import SearchPage from '../../SearchPage/SearchPage';
import BookStore from './BookStore';

const LandingContainer: React.FC = () => {
  const { success, isLoading, isError } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <>
      {success && <SearchPage />}
      {!success && !isLoading && <BookStore />}
      {isLoading && <SmallWrapper>데이터를 가져오는 중..</SmallWrapper>}
      {!success && isError && <SmallWrapper>에러가 발생했습니다.</SmallWrapper>}
    </>
  );
};

export default LandingContainer;
