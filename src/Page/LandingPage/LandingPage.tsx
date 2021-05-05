import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';

import { LandingWrapper } from '../../Components/Wrapper';
import Title from './Section/Title';
import BookStore from './Section/BookStore';
import SearchList from '../Search/SearchList';

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
        {!success && !isLoading && <BookStore />}
        {isLoading && <div>데이터를 가져오는 중..</div>}
        {!isLoading && success && <SearchList />}
        {isError && <div>에러가 발생했습니다.</div>}
      </LandingWrapper>
    </Main>
  );
};

export default LandingPage;
