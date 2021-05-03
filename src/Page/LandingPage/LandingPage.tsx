import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';

import { Wrapper } from '../../Components/Wrapper';
import Title from './Section/Title';
import BookStore from './Section/BookStore';
import SearchList from '../Search/SearchList';

const Main = styled.main`
  width: 100%;
`;

const LandingPage: React.FC = () => {
  const booksReducer = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <Main>
      <Title />
      <Wrapper>
        {!booksReducer.success && <BookStore />}
        <SearchList />
      </Wrapper>
    </Main>
  );
};

export default LandingPage;
