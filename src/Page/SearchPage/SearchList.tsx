import React, { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootReducerType } from '../../reducer/store';
import { loadMoreData } from '../../actions/book.actions.types';
import { searchBooks } from '../../actions/book.actions';

import { ListContainer } from './SearchList.styles';
import SearchModuleContainer from './module/SearchModuleContainer';

const SearchList: React.FC = () => {
  const { data, isLoading, hasMore, query, pageNumber } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  const dispatch = useDispatch();
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(loadMoreData());
          dispatch(searchBooks(query, pageNumber));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, pageNumber, dispatch, query]
  );

  return (
    <>
      <ListContainer>
        {data?.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <li key={item.isbn} ref={lastElement}>
                <SearchModuleContainer item={item} />
              </li>
            );
          } else {
            return (
              <li key={item.isbn}>
                <SearchModuleContainer item={item} />
              </li>
            );
          }
        })}
      </ListContainer>
    </>
  );
};

export default SearchList;
