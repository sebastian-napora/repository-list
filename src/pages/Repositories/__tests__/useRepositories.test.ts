import '@testing-library/jest-dom/extend-expect';

import { cleanup, renderHook, waitFor } from '@testing-library/react';

import { useRepositories } from '../useRepositories';

jest.mock('@apollo/client', () => ({
  useQuery: jest
    .fn()
    .mockReturnValue({ loading: false, error: undefined, data: undefined })
    .mockReturnValue({
      loading: false,
      error: undefined,
      data: {
        search: {
          edges: [
            {
              node: {
                name: 'React',
                stargazerCount: 1231231,
                forks: {
                  totalCount: 12312313
                },
                id: '123123',
                url: 'some url'
              }
            }
          ]
        }
      }
    })
}));

jest.mock('src/api/ServiceFactory', () => ({
  ServiceFactory: {
    get: jest.fn().mockReturnValue({
      get: jest.fn()
    })
  }
}));

afterEach(cleanup);

describe('useRepositories test', () => {
  describe('1. checked the creating a new row data from fetching data', () => {
    it('1.1. checked the row value should include one object in the array', () => {
      const { result, unmount } = renderHook(() => useRepositories());

      //first render with undefined data value
      waitFor(() => expect(result.current.rows).toStrictEqual([]));
      //second render with the mocked data from useQuery
      expect(result.current.rows).toStrictEqual([
        {
          forks: 12312313,
          id: '123123',
          name: 'React',
          stars: 1231231,
          url: 'some url'
        }
      ]);

      unmount();
    });
  });
});
