import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { IconContext } from 'react-icons';

import LandingPage from './Page/LandingPage/LandingPage';
import Header from './Page/Header/Header';

import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './Page/NotFound/NotFound';
import RecordPage from './Page/RecordPage/RecordPage';
import LandingResultContainer from './Page/LandingPage/Section/LandingResultContainer';
import CommentContainer from './Page/Comment/CommentContainer';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [theme, setTheme] = React.useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <IconContext.Provider value={{ className: 'icons' }}>
        <GlobalStyles />
        <Container>
          <CommentContainer />
          <Header toggle={themeToggler} />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/book/:id' component={LandingResultContainer} />
            <Route exact path='/record' component={RecordPage} />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </Container>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
