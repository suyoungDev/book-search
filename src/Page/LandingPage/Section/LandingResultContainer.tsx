import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { LandingWrapper } from '../../../Components/Wrapper';

const LandingResultContainer: React.FC = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);

  if (!data) return null;

  return (
    <LandingWrapper>
      <div>검색결과</div>
    </LandingWrapper>
  );
};

export default LandingResultContainer;
