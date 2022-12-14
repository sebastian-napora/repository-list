import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import { SearchBar } from '../../components/atoms/search';
import { HeaderSection } from '../../components/molecules/header-section';
import { MainSection } from '../../components/molecules/main-section';
import { RepositoryTable } from '../../components/organism/table';

import { ServiceFactory } from '../../api/ServiceFactory';

import { TRepostioriesQueryData } from '../../core/typings/repositories';

import { GET_REPOSITORY_SERVICE_KEY } from '../../utils/constants';

import { createNewRowsDataArray, COLUMNS } from './utils';

import {
  ERROR_MESSAGE,
  LIST_OF_REPOSITORIES,
  SEARCH_REPOSITORY,
  LOADING_WRAPPER_DATA_TEST_ID,
  ERROR_MESSAGE_DATA_TEST_ID,
  CONTAINER_TABLE_WRAPPER_DATA_TEST_ID
} from './constants';

import { LoadingWrapper } from './styles';

const REPOSITORIES = ServiceFactory.get<typeof GET_REPOSITORY_SERVICE_KEY>(GET_REPOSITORY_SERVICE_KEY);

export const Repositiories: FC = () => {
  const { loading, error, data } = useQuery<TRepostioriesQueryData>(REPOSITORIES.get());

  if (loading) {
    return (
      <LoadingWrapper data-testid={LOADING_WRAPPER_DATA_TEST_ID}>
        <CircularProgress color="secondary" />
      </LoadingWrapper>
    );
  }

  if (error) return <div data-testid={ERROR_MESSAGE_DATA_TEST_ID}>{ERROR_MESSAGE}</div>;

  return (
    <Container maxWidth="sm" data-testid={CONTAINER_TABLE_WRAPPER_DATA_TEST_ID}>
      <HeaderSection title={LIST_OF_REPOSITORIES}>
        <SearchBar label={SEARCH_REPOSITORY} />
      </HeaderSection>
      <MainSection>
        <RepositoryTable columns={COLUMNS} rows={data ? createNewRowsDataArray(data) : []} />
      </MainSection>
    </Container>
  );
};
