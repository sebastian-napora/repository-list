import { createGlobalStyle } from 'styled-components';

import { TSingleTheme } from './types';

export const GlobalStyles = createGlobalStyle<{ theme: TSingleTheme }>`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    height: 100vh;
    margin: 0 !important;
    z-index: 0;
  }
`;
