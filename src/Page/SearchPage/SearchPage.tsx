import SearchList from './SearchList';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import LoadingList from './module/LoadingList';

const SearchResultContainer = () => {
  const { loadMore } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <>
      <SearchList />
      {loadMore && <LoadingList />}
    </>
  );
};

export default SearchResultContainer;
