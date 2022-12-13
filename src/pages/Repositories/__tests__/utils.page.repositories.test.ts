import '@testing-library/jest-dom/extend-expect';
import { createNewRowsDataArray } from '../utils';

describe('pages/Repositories/utils.ts test', () => {
  describe('1. checked result of the function createNewRowsDataArray, should always return the array with an object', () => {
    it('1.1. should be returned an array with one object', () => {
      expect(
        createNewRowsDataArray({
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
        })
      ).toStrictEqual([
        {
          name: 'React',
          stars: 1231231,
          forks: 12312313,
          id: '123123',
          url: 'some url'
        }
      ]);
    });

    it('1.2. should be returned an array with two objects', () => {
      expect(
        createNewRowsDataArray({
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
                  url: 'some url 2'
                }
              },
              {
                node: {
                  name: 'React-native',
                  stargazerCount: 222,
                  forks: {
                    totalCount: 333
                  },
                  id: '312',
                  url: 'some url 3'
                }
              }
            ]
          }
        })
      ).toStrictEqual([
        {
          name: 'React',
          stars: 1231231,
          forks: 12312313,
          id: '123123',
          url: 'some url 2'
        },
        {
          name: 'React-native',
          stars: 222,
          forks: 333,
          id: '312',
          url: 'some url 3'
        }
      ]);
    });
  });
});
