import React from 'react';
import { Main, MainWrapper } from './Main';
import LandingTitle from '../Page/LandingPage/Section/LandingTitle';
import RightPage from '../Page/RightPage/RightPage';
import { LandingWrapper } from './Wrapper';

const MainPage = ({ children }: any) => {
  return (
    <Main>
      <MainWrapper>
        <LandingTitle />
        <LandingWrapper>{children}</LandingWrapper>
      </MainWrapper>
      <RightPage />
    </Main>
  );
};

export default MainPage;
