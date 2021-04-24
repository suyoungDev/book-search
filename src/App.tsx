import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

const Box = styled.section`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = React.useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        하이
        <button onClick={themeToggler}>토글</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
