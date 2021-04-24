import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { IconContext } from 'react-icons';

import LandingPage from './Page/LandingPage/LandingPage';
import Header from './Page/Header/Head';

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
          <Header toggle={themeToggler} />
          <LandingPage />
        </Container>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
