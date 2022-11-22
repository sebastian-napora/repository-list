import { IColumn, IRow } from '../../../core/typings/repositories';
import { TCreateData } from './types';

/**
 * @description This function helps to create mock data for template purposes.
 * @function createData
 */
export const createData: TCreateData = (name, stars, forks, id) => {
  return { name, stars, forks, id };
};

/**
 * @description This const includes mocked columns structure data for the repositories template.
 * @function MOCK_COLUMNS
 */
export const MOCK_COLUMNS: IColumn[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'stars', label: 'Stars', minWidth: 100 },
  {
    id: 'forks',
    label: 'Forks',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  }
];

/**
 * @description This const includes mocked rows data for the repositories template.
 * @function MOCK_ROWS
 */
export const MOCK_ROWS: IRow[] = [
  createData('India', 12121, 1324171354, '123133'),
  createData('China', 123123, 1403500365, '54674435'),
  createData('Italy', 123123, 60483973, '435'),
  createData('United States', 123, 327167434, '234121'),
  createData('Canada', 123, 37602103, '6754'),
  createData('Australia', 123, 25475400, '67541'),
  createData('Germany', 13, 83019200, '9789'),
  createData('Ireland', 123123, 4857000, '72812'),
  createData('Mexico', 6786, 126577691, '11123'),
  createData('Japan', 5675, 126317000, '4444'),
  createData('France', 12345, 67022000, '566666'),
  createData('United Kingdom', 456, 67545757, '6734666'),
  createData('Russia', 789, 146793744, '897877'),
  createData('Nigeria', 78988, 200962417, '9999999'),
  createData('Brazil', 78979, 210147125, '22228811')
];
