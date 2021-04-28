import React, { useState } from 'react';
import { Wrapper } from '../../Components/Wrapper';
import styled from 'styled-components';
import Title from './Section/Title';
import BookStore from './Section/BookStore';
import SearchModule from '../Search/SearchModule';

import { RootReducerType } from '../../reducer/store';
import { useSelector } from 'react-redux';
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

  return (
    <Main>
      <Title />
      <Wrapper>
        <BookStore />
        <SearchModule />
        {booksReducer.book?.books.map((item) => (
          <div>{item.title}</div>
        ))}
      </Wrapper>
    </Main>
  );
};

export default LandingPage;
