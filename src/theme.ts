import 'styled-components';
import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body10: string;
      body20: string;
      body30: string;
      body40: string;
      body50: string;
      body60: string;
      ink20: string;
      ink30: string;
      ink40: string;
      ink50: string;
      ink60: string;
      primary50: string;
      primary60: string;
      secondary50: string;
      secondary60: string;
      inputBg: string;
      inputBorder: string;
      border: string;
      invert: string;
      dummy01: string;
      dummy02: string;
      hoverBorder: string;
      hoverButton: string;
      modalBackground: string;
    };
    size: {
      padding50: string;
      borderRadius50: string;
      borderRadius40: string;
    };
    media: {
      desktopXL: string;
      desktopM: string;
      desktopL: string;
      desktop: string;
      tablet: string;
      phone: string;
    };
  }
}

const customMediaQuery = (minWidth: number): string => {
  return `@media screen and (min-width:${minWidth}px)`;
};

const media = {
  desktopXL: customMediaQuery(1700),
  desktopL: customMediaQuery(1440),
  desktopM: customMediaQuery(1240),
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const lightTheme: DefaultTheme = {
  colors: {
    body10: '#fff',
    body20: '#fff',
    body30: '#fff',
    body40: '#fff',
    body50: '#f0f0f0',
    body60: '#dfdfdf',
    ink20: '#c4c4c4',
    ink30: '#8d8d8d',
    ink40: '#4b4b4b',
    ink50: '#333332',
    ink60: '#282828',
    primary50: '#45AE9E',
    primary60: '#116A56',
    secondary50: '#D6CAAF',
    secondary60: '#905E4F',
    inputBg: '#fff',
    inputBorder: '#c4c4c4',
    border: '#BDC1C6',
    invert: '#E5E7EB',
    dummy01: '#f0f0f0',
    dummy02: '#f0f0f0',
    hoverBorder: 'rgba(94, 183, 186, 0.5)',
    hoverButton: 'rgba(94, 183, 186, 0.15)',
    modalBackground: 'rgba(0,0,0,0.3)',
  },
  size: {
    padding50: '1rem',
    borderRadius50: '0.6rem',
    borderRadius40: '0.3rem',
  },
  media: {
    desktopXL: media.desktopXL,
    desktopL: media.desktopL,
    desktopM: media.desktopM,
    desktop: media.desktop,
    tablet: media.tablet,
    phone: media.phone,
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    body10: '#c4c4c4',
    body20: '#999999',
    body30: '#717171',
    body40: '#4b4b4b',
    body50: '#282828',
    body60: '#1f1f1f',
    ink20: '#c4c4c4',

    ink30: '#666666',
    ink40: '#BDC1C6',
    ink50: '#E5E7EB',
    ink60: '#BDC1C6',
    primary50: '#45AE9E',
    primary60: '#116A56',
    secondary50: '#D6CAAF',
    secondary60: '#905E4F',
    inputBg: '#747474',
    inputBorder: '#747474',
    border: '#747474',
    invert: '#282828',
    dummy01: '#4b4b4b',
    dummy02: '#717171',
    hoverBorder: 'rgba(94, 183, 186, 0.5)',
    hoverButton: 'rgba(94, 183, 186, 0.15)',
    modalBackground: 'rgba(255,255,255,0.15)',
  },
  size: {
    padding50: '1rem',
    borderRadius40: '0.3rem',
    borderRadius50: '0.6rem',
  },
  media: {
    desktopXL: media.desktopXL,
    desktopL: media.desktopL,
    desktopM: media.desktopM,
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
