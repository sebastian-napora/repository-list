import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Header } from '../../atoms/header';

import { THeaderSectionProps } from './types';

export const HeaderSection: THeaderSectionProps = ({ title, children }) => (
  <Grid container spacing={2}>
    <Header title={title} />
    {children}
  </Grid>
);
