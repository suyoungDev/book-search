import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { StyledLink } from '../../../Components/StyledLink';
import SearchModule from './SearchModule';
import { Book } from '../../../actions/book.actions.types';
import { getBookDetail } from '../../../actions/detail.action';

interface Prop {
  item: Book;
}

const SearchModuleContainer: React.FC<Prop> = ({ item }) => {
  const dispatch = useDispatch();
  const viewMoreDetail = useCallback(
    (item: Book) => {
      dispatch(getBookDetail(item));
    },
    [dispatch]
  );

  return (
    <StyledLink to={`book/${item.isbn}`} onClick={() => viewMoreDetail(item)}>
      <SearchModule
        image={item.image}
        title={item.title}
        pubdate={item.pubdate}
        author={item.author}
        description={item.description}
      />
    </StyledLink>
  );
};

export default SearchModuleContainer;
