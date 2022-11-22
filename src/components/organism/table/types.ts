import { ChangeEvent, FC } from 'react';
import { IColumn, IRow } from '../../../core/typings/repositories';

export type TRepositoryTableProps = FC<{ rows: IRow[]; columns: ReadonlyArray<IColumn> }>;

export type TUseRepositoryTable = () => {
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
};

export interface IStyledTableCell {
  $minWidth?: number;
}
