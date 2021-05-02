import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Wrapper } from '../../Components/Wrapper';
import Title from './Section/Title';
import BookStore from './Section/BookStore';
import SearchModule from '../Search/SearchModule';

import { RootReducerType } from '../../reducer/store';
import BookReducer from '../../reducer/book.reducer';
// import { fetchBooks } from '../../actions/book.actions';

const Main = styled.main`
  width: 100%;
`;

const LandingPage: React.FC = () => {
  const [bookTitle, setBookTitle] = useState('');

  const booksReducer = useSelector(
    (state: RootReducerType) => state.bookReducer
  );
  console.log(booksReducer);

  return (
    <Main>
      <Title />
      <Wrapper>
        <BookStore />
        <SearchModule />
      </Wrapper>
    </Main>
  );
};

export default LandingPage;
