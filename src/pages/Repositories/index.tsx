import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Container from '@material-ui/core/Container';

import { SearchBar } from '../../components/atoms/search';
import { HeaderSection } from '../../components/molecules/header-section';
import { MainSection } from '../../components/molecules/main-section';
import { RepositoryTable } from '../../components/organism/table';

import { useRepositories } from './useRepositories';

import { COLUMNS } from './utils';

import { ERROR_MESSAGE, LIST_OF_REPOSITORIES, SEARCH_REPOSITORY } from './constants';

import { LoadingWrapper } from './styles';

export const Repositiories: FC = () => {
  const { loading, error, rows } = useRepositories();

  if (loading) {
    return (
      <LoadingWrapper>
        <CircularProgress color="secondary" />
      </LoadingWrapper>
    );
  }

  if (error) return <div>{ERROR_MESSAGE}</div>;

  return (
    <Container maxWidth="sm">
      <HeaderSection title={LIST_OF_REPOSITORIES}>
        <SearchBar label={SEARCH_REPOSITORY} />
      </HeaderSection>
      <MainSection>
        <RepositoryTable columns={COLUMNS} rows={rows} />
      </MainSection>
    </Container>
  );
};
