import { ApolloError } from '@apollo/client';
import { TRepostioriesQueryData } from '../../core/typings/repositories';

export type TGetNewRowsData = (data: TRepostioriesQueryData) => void;

export type TCreateNewRowsDataArray = (data: TRepostioriesQueryData) => {
  name: string;
  stars: number;
  forks: number;
  id: string;
  url: string;
}[];

export type TUseRepositories = () => {
  searchedPhrase: string | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  rows: {
    name: string;
    stars: number;
    forks: number;
    id: string;
    url: string;
  }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => NodeJS.Timeout;
};
