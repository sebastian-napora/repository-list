import React from 'react';

import Container from '@material-ui/core/Container';

import { SearchBar } from '../../atoms/search';

import { HeaderSection } from '../../molecules/header-section';
import { MainSection } from '../../molecules/main-section';

import { RepositoryTable } from '../../organism/table';

import { MOCK_COLUMNS, MOCK_ROWS } from './utils';

export const RepositoriesTamplate = () => (
  <Container maxWidth="sm">
    <HeaderSection title={'List of repositiories you will see here soon...'}>
      <SearchBar label={'Search repository'} onChange={() => null} />
    </HeaderSection>
    <MainSection>
      <RepositoryTable columns={MOCK_COLUMNS} rows={MOCK_ROWS} />
    </MainSection>
  </Container>
);
