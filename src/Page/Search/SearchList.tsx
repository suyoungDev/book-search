import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../../reducer/store';
import SearchModule from './SearchModule';

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.ink40};
`;

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
  const { data, isLoading } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  if (!data?.length) return <Wrapper>검색결과가 없습니다.</Wrapper>;

  return (
    <ListContainer>
      {data?.map((item) => (
        <SearchModule
          key={item.isbn}
          image={item.image}
          title={item.title}
          pubdate={item.pubdate}
          author={item.author}
          description={item.description}
        />
      ))}

      {isLoading && <div>데이터를 가져오는 중..</div>}
    </ListContainer>
  );
};

export default SearchList;
