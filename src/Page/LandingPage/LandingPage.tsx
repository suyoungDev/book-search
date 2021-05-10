import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router';

import Title from './Section/Title';
import LandingContainer from './Section/LandingContainer';
import LandingResultContainer from './Section/LandingResultContainer';
import RecordPage from '../RecordPage/RecordPage';
import NotFound from '../NotFound/NotFound';

const Main = styled.main`
  width: 100%;
`;

const LandingPage = () => {
  return (
    <Main>
      <Title />
      <Switch>
        <Route exact path='/' component={LandingContainer} />
        <Route exact path='/search/:id' component={LandingResultContainer} />
        <Route exact path='/record' component={RecordPage} />
        <Route exact path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </Main>
  );
};

export default LandingPage;
