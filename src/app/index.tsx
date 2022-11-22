import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { Repositiories } from '../pages/Repositories';

import { GlobalStyles } from '../theme/GlobalStyles';

import { useApp } from './useApp';

import { client } from '../api/HTTP';

export const App: FC = () => {
  const { themeLoaded, selectedTheme } = useApp();

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <ApolloProvider client={client}>
            <Repositiories />
          </ApolloProvider>
        </ThemeProvider>
      )}
    </>
  );
};
