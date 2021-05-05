import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../../reducer/store';
import SearchModule from './SearchModule';

const Box = styled.div`
  color: ${(props) => props.theme.colors.ink40};
`;

const SearchList: React.FC = () => {
  const { book } = useSelector((state: RootReducerType) => state.bookReducer);

  if (!Number(book)) return <Box>검색결과가 없습니다.</Box>;

  return (
    <div>
      {book?.map((item) => (
        <SearchModule
          key={item.isbn}
          image={item.image}
          title={item.title}
          pubdate={item.pubdate}
          author={item.author}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default SearchList;
