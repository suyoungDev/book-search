import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { LandingWrapper } from '../../../Components/Wrapper';
import { useLocation } from 'react-router';
import DetailModule from '../../Search/DetailModule';
import LandingTitle from './LandingTitle';
import { Main } from '../../../Components/Main';

const LandingResultContainer = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);
  const location = useLocation();

  if (!data) return null;

  return (
    <Main>
      <LandingTitle />
      <LandingWrapper>
        <DetailModule />
      </LandingWrapper>
    </Main>
  );
};

export default LandingResultContainer;
