import gql from 'graphql-tag';

import { TGetRepostioryService } from './types';

const GET_REPOSITORIES = gql`
  query {
    search(query: "is:public", type: REPOSITORY, first: 50) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
            forks {
              totalCount
            }
            stargazerCount
            id
          }
        }
      }
    }
  }
`;

export const getRepostioryService: TGetRepostioryService = {
  get() {
    return GET_REPOSITORIES;
  }
};
