import React from 'react';

import { THeaderProps } from './types';

import { Container } from './styles';

export const Header: THeaderProps = ({ title }) => {
  return <Container>{title}</Container>;
};
