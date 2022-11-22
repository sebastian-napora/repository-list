import { useState } from 'react';

import { TUseRepositoryTable } from './types';

export const useRepositoryTable: TUseRepositoryTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  /**
   * @description This function manage switching the page number.
   * @function handleChangePage
   */
  const handleChangePage: ReturnType<TUseRepositoryTable>['handleChangePage'] = (event, newPage) => {
    setPage(newPage);
  };

  /**
   * @description This function mange to change number of rows per page.
   * @function handleChangeRowsPerPage
   */
  const handleChangeRowsPerPage: ReturnType<TUseRepositoryTable>['handleChangeRowsPerPage'] = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  };
};
