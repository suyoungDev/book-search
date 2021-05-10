import React from 'react';
import styled from 'styled-components';

import Title from './Section/Title';
import LandingContainer from './Section/LandingContainer';
import RightSection from './../RightSection/RightSection';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LandingPage = () => {
  return (
    <Main>
      <Container>
        <Title />
        <LandingContainer />
      </Container>
      <RightSection />
    </Main>
  );
};

export default LandingPage;
