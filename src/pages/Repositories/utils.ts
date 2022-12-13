import { IColumn } from '../../core/typings/repositories';
import { TCreateNewRowsDataArray } from './types';

/**
 * @description This const include the structure of the columns in the repository table
 * @const COLUMNS
 */
export const COLUMNS: ReadonlyArray<IColumn> = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'stars', label: 'Stars', minWidth: 100 },
  {
    id: 'forks',
    label: 'Forks',
    minWidth: 100,
    align: 'right'
  }
];

/**
 * @description This function create a new set of the rows data with repositories.
 * @function createNewRowsDataArray
 */
export const createNewRowsDataArray: TCreateNewRowsDataArray = (data) =>
  data.search.edges.map((repositoryDetails) => ({
    name: repositoryDetails.node.name,
    stars: repositoryDetails.node.stargazerCount,
    forks: repositoryDetails.node.forks.totalCount,
    id: repositoryDetails.node.id,
    url: repositoryDetails.node.url
  }));
