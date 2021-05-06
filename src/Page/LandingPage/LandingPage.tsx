import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';

import { LandingWrapper, SmallWrapper } from '../../Components/Wrapper';
import Title from './Section/Title';
import BookStore from './Section/BookStore';
import SearchResultContainer from '../Search/SearchResultContainer';

import LoadingContainer from '../Search/LoadingContainer';

const Main = styled.main`
  width: 100%;
`;

const LandingPage: React.FC = () => {
  const { success, isLoading, isError } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <Main>
      <Title />
      <LandingWrapper>
        <LoadingContainer />

        {!success && !isLoading && <BookStore />}
        {!success && isLoading && (
          <SmallWrapper>데이터를 가져오는 중..</SmallWrapper>
        )}
        {success && <SearchResultContainer />}
        {!success && isError && (
          <SmallWrapper>에러가 발생했습니다.</SmallWrapper>
        )}
      </LandingWrapper>
    </Main>
  );
};

export default LandingPage;
