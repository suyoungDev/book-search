import React from 'react';

import LandingTitle from './Section/LandingTitle';
import LandingContainer from './Section/LandingContainer';
import { Main } from '../../Components/Main';

const LandingPage = () => {
  return (
    <Main>
      <LandingTitle />
      <LandingContainer />
    </Main>
  );
};

export default LandingPage;
