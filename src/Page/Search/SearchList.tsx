import React, { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootReducerType } from '../../reducer/store';
import { loadMoreData } from '../../actions/book.actions.types';
import { fetchBooks } from '../../actions/book.actions';

import { ListContainer } from './SearchList.styles';
import SearchModule from './SearchModule';
import LoadingContainer from './LoadingContainer';

const SearchList: React.FC = () => {
  const { data, isLoading, hasMore, query, pageNumber, loadMore } = useSelector(
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
          dispatch(fetchBooks(query, pageNumber));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, pageNumber]
  );

  return (
    <ListContainer>
      {data?.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <div ref={lastElement} key={item.isbn}>
              <SearchModule
                image={item.image}
                title={item.title}
                pubdate={item.pubdate}
                author={item.author}
                description={item.description}
              />
            </div>
          );
        } else {
          return (
            <div key={item.isbn}>
              <SearchModule
                image={item.image}
                title={item.title}
                pubdate={item.pubdate}
                author={item.author}
                description={item.description}
              />
            </div>
          );
        }
      })}
      {loadMore && <LoadingContainer />}
    </ListContainer>
  );
};

export default SearchList;
