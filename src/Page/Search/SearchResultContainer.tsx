import React from 'react';
import SearchList from './SearchList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../actions/book.actions';
import { RootReducerType } from '../../reducer/store';
import { SmallWrapper } from '../../Components/Wrapper';

const SearchResultContainer = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootReducerType) => state.bookReducer);

  if (!data?.length) return <SmallWrapper>검색결과가 없습니다.</SmallWrapper>;

  return <SearchList />;
};

export default SearchResultContainer;
