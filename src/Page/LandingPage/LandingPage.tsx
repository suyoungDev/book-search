import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import Title from './Section/Title';
import LandingContainer from './Section/LandingContainer';
import LandingResultContainer from './Section/LandingResultContainer';
import RecordPage from '../RecordPage/RecordPage';

const Main = styled.main`
  width: 100%;
`;

const LandingPage: React.FC = () => {
  return (
    <Main>
      <Title />
      <Switch>
        <Route exact path='/' component={LandingContainer} />
        <Route exact path='/search' component={LandingResultContainer} />
        <Route exact path='/record' component={RecordPage} />
      </Switch>
    </Main>
  );
};

export default LandingPage;
