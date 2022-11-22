import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../theme/GlobalStyles';

import { useApp } from './useApp';

export const App: FC = () => {
  const { themeLoaded, selectedTheme } = useApp();

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          Work in progress
        </ThemeProvider>
      )}
    </>
  );
};
