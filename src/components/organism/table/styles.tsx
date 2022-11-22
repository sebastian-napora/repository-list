import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

import { IStyledTableCell } from './types';

export const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: '100%'
  }
});

export const StyledTableCell = styled(TableCell)<IStyledTableCell>`
  min-width: ${({ width }) => width};
`;
