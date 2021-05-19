import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import LoadingList from './module/LoadingList';
const SearchList = React.lazy(() => import('./SearchList'));

const SearchResultContainer = () => {
  const { loadMore } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );

  return (
    <>
      <Suspense fallback={<LoadingList />}>
        <SearchList />
      </Suspense>
      {loadMore && <LoadingList />}
    </>
  );
};

export default SearchResultContainer;
