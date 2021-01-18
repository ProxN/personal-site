// import original module declarations
import 'styled-components';

interface IColor {
  light: string;
  main: string;
  dark: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: IColor;
      secondary: IColor;
      textColor: string;
    };
    fontSizes: number[];
    fontWeights: number[];
    fontFamily: string;
    borderRadius: string;
    lineHeight: number;
  }
}
