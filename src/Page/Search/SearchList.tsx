import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import SearchModule from './SearchModule';

const SearchList: React.FC = () => {
  const { book } = useSelector((state: RootReducerType) => state.bookReducer);

  return (
    <>
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
    </>
  );
};

export default SearchList;
