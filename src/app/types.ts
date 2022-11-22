import { TSingleTheme } from '../theme/types';

export type TUseApp = () => {
  selectedTheme: TSingleTheme;
  themeLoaded: boolean;
};

export type THandleSelectedTheme = () => void;
