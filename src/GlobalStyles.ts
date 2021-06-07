import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: ${(props) => props.theme.colors.body60};
    color: ${(props) => props.theme.colors.ink50};
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
