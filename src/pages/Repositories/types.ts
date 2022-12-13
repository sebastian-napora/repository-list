import { ApolloError } from '@apollo/client';
import { IRow, TRepostioriesQueryData } from '../../core/typings/repositories';

export type TUseRepositories = () => {
  loading: boolean;
  error: ApolloError | undefined;
  rows: IRow[];
};

export type TGetNewRowsData = (data: TRepostioriesQueryData) => void;

export type TCreateNewRowsDataArray = (data: TRepostioriesQueryData) => {
  name: string;
  stars: number;
  forks: number;
  id: string;
  url: string;
}[];
