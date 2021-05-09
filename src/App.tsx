import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { IconContext } from 'react-icons';

import LandingPage from './Page/LandingPage/LandingPage';
import Header from './Page/Header/Head';
import RightSection from './Page/RightSection/RightSection';
import Modal from './Components/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
        <Modal />
        <Container>
          <Header toggle={themeToggler} />
          <LandingPage />
          <RightSection />
        </Container>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
