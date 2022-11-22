import React from 'react';

import { StyledTextField } from './styles';

import { TSearchBarProps } from './types';

export const SearchBar: TSearchBarProps = ({ label, onChange }) => (
  <StyledTextField id="outlined-basic" label={label} variant="outlined" onChange={onChange} />
);
