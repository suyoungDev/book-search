import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { LandingWrapper } from '../../../Components/Wrapper';
import { useLocation } from 'react-router';
import DetailModule from '../../Search/DetailModule';
import Title from './Title';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingResultContainer = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);
  const location = useLocation();

  if (!data) return null;

  return (
    <Main>
      <Title />
      <LandingWrapper>
        <DetailModule />
      </LandingWrapper>
    </Main>
  );
};

export default LandingResultContainer;
