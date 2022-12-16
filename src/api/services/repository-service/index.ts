import gql from 'graphql-tag';

import { TGetRepostioryService } from './types';

const GET_REPOSITORIES = gql`
  query {
    search(query: "is:public", type: REPOSITORY, first: 10) {
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

const GET_REPOSITORIES_BY_SEARCHING_PHRASE = gql`
  query getRepositoriesBySearchedPhrase($searchedPhrase: String!) {
    search(query: $searchedPhrase, type: REPOSITORY, first: 10) {
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
  },
  getBySearchingPhrase() {
    return GET_REPOSITORIES_BY_SEARCHING_PHRASE;
  }
};
