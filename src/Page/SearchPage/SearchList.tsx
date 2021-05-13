import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootReducerType } from '../../reducer/store';
import { loadMoreData, Book } from '../../actions/book.actions.types';
import { fetchBooks } from '../../actions/book.actions';
import { getBookDetail } from '../../actions/detail.action';

import { ListContainer } from './SearchList.styles';
import SearchModule from './module/SearchModule';
import LoadingContainer from './LoadingContainer';
import { StyledLink } from '../../Components/StyledLink';

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
            <li
              ref={lastElement}
              key={item.isbn}
              onClick={() => viewMoreDetail(item)}
            >
              <StyledLink to={`/book/${item.isbn}`}>
                <SearchModule
                  image={item.image}
                  title={item.title}
                  pubdate={item.pubdate}
                  author={item.author}
                  description={item.description}
                />
              </StyledLink>
            </li>
          );
        } else {
          return (
            <li key={item.isbn} onClick={() => viewMoreDetail(item)}>
              <StyledLink to={`/book/${item.isbn}`}>
                <SearchModule
                  image={item.image}
                  title={item.title}
                  pubdate={item.pubdate}
                  author={item.author}
                  description={item.description}
                />
              </StyledLink>
            </li>
          );
        }
      })}
      {loadMore && <LoadingContainer />}
    </ListContainer>
  );
};

export default SearchList;
