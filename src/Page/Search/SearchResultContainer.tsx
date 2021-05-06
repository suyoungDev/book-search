import SearchList from './SearchList';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import { SmallWrapper } from '../../Components/Wrapper';

const SearchResultContainer = () => {
  const { data } = useSelector((state: RootReducerType) => state.bookReducer);

  if (!data?.length) return <SmallWrapper>검색결과가 없습니다.</SmallWrapper>;

  return <SearchList />;
};

export default SearchResultContainer;
