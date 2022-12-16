import React, { FC } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import { SearchBar } from '../../components/atoms/search';
import { HeaderSection } from '../../components/molecules/header-section';
import { MainSection } from '../../components/molecules/main-section';
import { RepositoryTable } from '../../components/organism/table';

import { useRepositories } from './useRepostiories';

import { COLUMNS } from './utils';

import {
  ERROR_MESSAGE,
  LIST_OF_REPOSITORIES,
  SEARCH_REPOSITORY,
  LOADING_WRAPPER_DATA_TEST_ID,
  ERROR_MESSAGE_DATA_TEST_ID,
  CONTAINER_TABLE_WRAPPER_DATA_TEST_ID
} from './constants';

import { LoadingWrapper } from './styles';

export const Repositiories: FC = () => {
  const { loading, error, rows, searchedPhrase, onChange } = useRepositories();

  if (error) return <div data-testid={ERROR_MESSAGE_DATA_TEST_ID}>{ERROR_MESSAGE}</div>;

  return (
    <Container maxWidth="sm" data-testid={CONTAINER_TABLE_WRAPPER_DATA_TEST_ID}>
      <HeaderSection title={LIST_OF_REPOSITORIES}>
        <SearchBar label={SEARCH_REPOSITORY} value={searchedPhrase} onChange={onChange} />
      </HeaderSection>
      <MainSection>
        {loading ? (
          <LoadingWrapper data-testid={LOADING_WRAPPER_DATA_TEST_ID}>
            <CircularProgress color="secondary" />
          </LoadingWrapper>
        ) : (
          <RepositoryTable columns={COLUMNS} rows={rows.length ? rows : []} />
        )}
      </MainSection>
    </Container>
  );
};
