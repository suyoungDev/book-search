import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SmallWrapper } from '../../Components/Wrapper';
import { RootReducerType } from '../../reducer/store';
import SearchModule from './SearchModule';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0 4rem 0;
  > div {
    margin-bottom: 1rem;
  }
`;

const SearchList: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, hasMore } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    // 데이터 가져오기
  }, [pageNumber]);

  if (!data?.length) return <SmallWrapper>검색결과가 없습니다.</SmallWrapper>;

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

      {isLoading && hasMore && <div>데이터를 가져오는 중..</div>}
    </ListContainer>
  );
};

export default SearchList;
