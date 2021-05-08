import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootReducerType } from '../../reducer/store';
import { loadMoreData, Book } from '../../actions/book.actions.types';
import { fetchBooks } from '../../actions/book.actions';
import { getBookDetail } from '../../actions/detail.action';

import { ListContainer } from './SearchList.styles';
import SearchModule from './SearchModule';
import LoadingContainer from './LoadingContainer';

const SearchList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, hasMore, query, pageNumber, loadMore } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  useEffect(() => {
    if (query !== searchQuery) {
      setSearchQuery(query);
      window.scrollTo(0, 0);
    }
  }, [query, searchQuery]);

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
    [isLoading, hasMore, pageNumber, dispatch, query]
  );

  const viewMoreDetail = (item: Book) => {
    dispatch(getBookDetail(item));
  };

  return (
    <ListContainer>
      {data?.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <div
              ref={lastElement}
              key={item.isbn}
              onClick={() => viewMoreDetail(item)}
            >
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
            <div key={item.isbn} onClick={() => viewMoreDetail(item)}>
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
