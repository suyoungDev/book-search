import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';

import DetailModule from './module/DetailModule';
import MainPage from '../../Components/MainPage';

const LandingResultContainer = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);

  if (!data) return null;

  return (
    <MainPage>
      <DetailModule />
    </MainPage>
  );
};

export default LandingResultContainer;
