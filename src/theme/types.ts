import { CSSProp } from 'styled-components';

export type TThemes = {
  data: {
    main: TSingleTheme;
    otherTheme: TSingleTheme;
  };
};

export type TUseTheme = {
  theme: TSingleTheme;
  themeLoaded: boolean;
  setMode: (mode: TSingleTheme) => void;
  handleSetTheme: (localTheme: TThemes) => void;
};

export type TSingleTheme = {
  data: unknown;
  id: string;
  name: string;
  colors: {
    fonts: {
      primary: string;
      white: '#ffffff';
      grey: string;
      greySecondary: string;
    };
    purpleColors: {
      primary: '#46124a';
      secondary: '#3b0044';
      third: '#51034d';
    };
    body: string;
    text: string;
    white: '#ffffff';
    primary: string;
    secondary: string;
    black: string;
    greyPrimary: '#cfcfcf';
    greySecondary: string;
    hoverColor: '#f5f5f5';
    button: {
      text: string;
      background: string;
    };
    link: {
      text: string;
      opacity: number;
    };
  };
  mediaQueries: {
    smartphones: string;
    smallTablet: string;
    tablet: string;
    laptop: string;
    desktop: string;
  };
};

export type TCssStylesByDeviceWidth = (
  typeDevice: 'smartphones' | 'smallTablet' | 'tablet' | 'laptop' | 'desktop' | 'largeDesktop',
  props: CSSProp
) => CSSProp;
