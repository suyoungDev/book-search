import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { LandingWrapper, SmallWrapper } from '../../../Components/Wrapper';
import SearchResultContainer from '../../Search/SearchResultContainer';
import BookStore from './BookStore';

const LandingContainer: React.FC = () => {
  const { success, isLoading, isError } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <LandingWrapper>
      {!success && !isLoading && <BookStore />}
      {!success && isLoading && (
        <SmallWrapper>데이터를 가져오는 중..</SmallWrapper>
      )}
      {success && <SearchResultContainer />}
      {!success && isError && <SmallWrapper>에러가 발생했습니다.</SmallWrapper>}
    </LandingWrapper>
  );
};

export default LandingContainer;