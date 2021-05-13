import React from 'react';
import { Main, MainWrapper } from './Main';
import { RightWrapper } from './SideWrapper';
import LandingTitle from '../Page/LandingPage/Section/LandingTitle';

const MainPage = ({ children }: any) => {
  return (
    <Main>
      <MainWrapper>
        <LandingTitle />
        {children}
      </MainWrapper>
      <RightWrapper />
    </Main>
  );
};

export default MainPage;
