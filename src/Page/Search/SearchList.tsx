import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import SearchModule from './SearchModule';

const SearchList: React.FC = () => {
  const booksReducer = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <>
      {booksReducer.success &&
        booksReducer.book?.map((item) => (
          <div key={item.isbn}>
            <SearchModule
              image={item.image}
              title={item.title}
              pubdate={item.pubdate}
              author={item.author}
              description={item.description}
            />
          </div>
        ))}
    </>
  );
};

export default SearchList;
