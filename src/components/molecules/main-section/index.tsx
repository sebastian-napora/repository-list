import React from 'react';
import Grid from '@material-ui/core/Grid';

import { TMainSectionProps } from './types';

import { useStyles } from './styles';

export const MainSection: TMainSectionProps = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {children}
    </Grid>
  );
};
