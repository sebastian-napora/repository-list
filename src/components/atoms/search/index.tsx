import React from 'react';

import { StyledTextField } from './styles';

import { TSearchBarProps } from './types';

export const SearchBar: TSearchBarProps = ({ label, value, onChange }) => (
  <StyledTextField id="outlined-basic" label={label} value={value} variant="outlined" onChange={onChange} />
);
