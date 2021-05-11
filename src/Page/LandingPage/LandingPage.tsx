import React from 'react';
import styled from 'styled-components';

import Title from './Section/Title';
import LandingContainer from './Section/LandingContainer';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingPage = () => {
  return (
    <Main>
      <Title />
      <LandingContainer />
    </Main>
  );
};

export default LandingPage;
