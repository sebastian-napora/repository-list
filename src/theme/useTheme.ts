import { useEffect, useState } from 'react';

import { THEMES } from './schema';

import { TSingleTheme, TUseTheme } from './types';

export const useTheme: TUseTheme = () => {
  const allThemes = THEMES;
  //useStates
  const [theme, setTheme] = useState<TSingleTheme>(allThemes.data.main);
  const [themeLoaded, setThemeLoaded] = useState(false);

  /**
   * @description This function manage a theme which we want to display. After change theme styles should be changed.
   * @function setMode
   * @category Theme
   */
  const setMode: ReturnType<TUseTheme>['setMode'] = (mode) => setTheme(mode);

  /**
   * @description This function sets a theme which we want to display. After change theme styles should be changed.
   * @function handleSetTheme
   * @category Theme
   */
  const handleSetTheme: ReturnType<TUseTheme>['handleSetTheme'] = (localThemes) => {
    localThemes && setTheme(localThemes.data.main);
    setThemeLoaded(true);
  };

  useEffect(() => handleSetTheme(THEMES), []);

  return {
    theme,
    themeLoaded,
    setMode,
    handleSetTheme
  };
};
