import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';

import { LandingWrapper } from '../../../Components/Wrapper';
import { useRouteMatch } from 'react-router';

const LandingResultContainer = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);
  const customMatch = useRouteMatch('/search/:id');
  console.log(customMatch?.params);

  if (!data) return null;

  return (
    <LandingWrapper>
      <div>검색결과</div>
    </LandingWrapper>
  );
};

export default LandingResultContainer;
