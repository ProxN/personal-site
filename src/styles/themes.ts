import { DefaultTheme } from 'styled-components';

const fontSizes = [12, 14, 16, 24, 30, 48, 58, 72];
const fontFamily = "'Poppins', Helvetica, sans-serif";
const fontWeights = [400, 500, 700];
const lineHeight = 1.5;
const borderRadius = '8px';

export const DarkTheme: DefaultTheme = {
  colors: {
    primary: {
      light: '#503A65',
      main: '#30223e',
      dark: '#1f132b',
      // light: '#363c41',
      // main: '#1d2228',
      // dark: '#161b1f',
    },
    secondary: {
      light: '#f8c27b',
      main: '#f6b35a',
      dark: '#dda151',
    },
    textColor: '#f1f1f1',
  },
  fontFamily,
  fontSizes,
  fontWeights,
  lineHeight,
  borderRadius,
};

export const LightTheme = {};
