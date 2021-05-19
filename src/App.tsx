import React, { useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { IconContext } from 'react-icons';

import LandingPage from './Page/LandingPage/LandingPage';
import Header from './Page/Header/Header';

import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './Page/NotFound/NotFound';
import RecordPage from './Page/RecordPage/RecordPage';
import DetailPage from './Page/DetailPage/DetailPage';
import CommentContainer from './Page/RecordPage/section/Comment/CommentContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${(props) => props.theme.media.phone} {
    flex-direction: row;
  }
`;

function App() {
  const [theme, setTheme] = React.useState(true);

  const themeToggler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.checked);
  }, []);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <IconContext.Provider value={{ className: 'icons' }}>
        <GlobalStyles />
        <Container>
          <CommentContainer />
          <Header toggle={themeToggler} theme={theme} />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/book/:id' component={DetailPage} />
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
