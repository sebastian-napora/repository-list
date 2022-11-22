import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { ServiceFactory } from '../../api/ServiceFactory';

import { TGetNewRowsData, TUseRepositories } from './types';
import { TRepostioriesQueryData } from '../../core/typings/repositories';

import { GET_REPOSITORY_SERVICE_KEY } from '../../utils/constants';

import { createNewRowsDataArray } from './utils';

const REPOSITORIES = ServiceFactory.get<typeof GET_REPOSITORY_SERVICE_KEY>(GET_REPOSITORY_SERVICE_KEY);

export const useRepositories: TUseRepositories = () => {
  const { loading, error, data } = useQuery<TRepostioriesQueryData>(REPOSITORIES.get());

  const [rows, setRows] = useState<ReturnType<TUseRepositories>['rows']>([]);

  /**
   * @description This function sets a new rows data from fetched query data.
   * @function getNewRowsData
   */
  const getNewRowsData: TGetNewRowsData = (data) => {
    const newRowsData = createNewRowsDataArray(data);

    if (newRowsData.length > 0) {
      setRows(newRowsData);
    }
  };

  useEffect(() => {
    if (data !== undefined && data?.search?.edges?.length > 0) {
      getNewRowsData(data);
    }
  }, [data?.search?.edges?.length, loading]);

  return { loading, error, rows };
};
