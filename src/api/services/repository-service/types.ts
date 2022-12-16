import gql from 'graphql-tag';

export type TGetRepostioryService = {
  get(): ReturnType<typeof gql>;
  getBySearchingPhrase(): ReturnType<typeof gql>;
};
