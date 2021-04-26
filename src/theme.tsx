import 'styled-components';
import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body50: string;
      body60: string;
      ink40: string;
      ink50: string;
      ink60: string;
      primary50: string;
      primary60: string;
      secondary50: string;
      secondary60: string;
      inputBg: string;
      inputBorder: string;
    };
    size: {
      padding50: string;
    };
    media: {
      desktop: string;
      tablet: string;
      phone: string;
    };
  }
}

const customMediaQuery = (minWidth: number): string => {
  return `@media screen and (max-width:${minWidth}px)`;
};

const media = {
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const lightTheme: DefaultTheme = {
  colors: {
    body50: '#fff',
    body60: '#E5E7EB',
    ink40: 'gray',
    ink50: '#333332',
    ink60: '#282828',
    primary50: '#45AE9E',
    primary60: '#116A56',
    secondary50: '#D6CAAF',
    secondary60: '#905E4F',
    inputBg: '#fff',
    inputBorder: '#747474',
  },
  size: {
    padding50: '1rem',
  },
  media: {
    desktop: media.desktop,
    tablet: media.tablet,
    phone: media.phone,
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    body50: '#333332',
    body60: '#282828',
    ink40: '#BDC1C6',
    ink50: '#E5E7EB',
    ink60: '#BDC1C6',
    primary50: '#45AE9E',
    primary60: '#116A56',
    secondary50: '#D6CAAF',
    secondary60: '#905E4F',
    inputBg: '#747474',
    inputBorder: '#747474',
  },
  size: {
    padding50: '1rem',
  },
  media: {
    desktop: media.desktop,
    tablet: media.tablet,
    phone: media.phone,
  },
};

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: ${(props) => props.theme.colors.body50};
    color: ${(props) => props.theme.colors.ink50};
  }
`;
