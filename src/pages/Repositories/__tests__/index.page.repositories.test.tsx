import React from 'react';
import { ThemeProvider } from 'styled-components';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';

import { Repositiories } from '..';

import { THEMES } from '../../../theme/schema';

import { IItEachRepostioriesPage } from './types';

import {
  CONTAINER_TABLE_WRAPPER_DATA_TEST_ID,
  ERROR_MESSAGE_DATA_TEST_ID,
  LOADING_WRAPPER_DATA_TEST_ID
} from '../constants';

jest.mock('@apollo/client', () => ({
  useQuery: jest
    .fn()
    .mockReturnValueOnce({
      loading: true,
      error: undefined,
      rows: []
    })
    .mockReturnValueOnce({ loading: false, error: true, rows: [] })
    .mockReturnValueOnce({
      loading: false,
      error: undefined,
      rows: [
        {
          name: 'React',
          stars: 11111111111,
          forks: 22222222,
          id: '12313'
        }
      ]
    })
}));

afterAll(() => {
  jest.clearAllMocks();
  cleanup();
});

describe('Repositories page test', () => {
  describe('1. Checked the result of the repositories component with diffrent result of the query', () => {
    it.each<IItEachRepostioriesPage>([
      { numberTest: 1, dataTestId: LOADING_WRAPPER_DATA_TEST_ID },
      { numberTest: 2, dataTestId: ERROR_MESSAGE_DATA_TEST_ID },
      { numberTest: 3, dataTestId: CONTAINER_TABLE_WRAPPER_DATA_TEST_ID }
    ])('1.$numberTest. should render repositiories page with data-testid equal to: $dataTestId', ({ dataTestId }) => {
      const { container, unmount } = render(
        <ThemeProvider theme={THEMES.data.main}>
          <Repositiories />
        </ThemeProvider>
      );

      expect(container.innerHTML).toContain(dataTestId);

      unmount();
    });
  });
});
