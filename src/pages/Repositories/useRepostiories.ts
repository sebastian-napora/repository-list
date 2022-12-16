import { useRef, useState } from 'react';
import { useQuery } from '@apollo/client';

import { ServiceFactory } from '../../api/ServiceFactory';

import { TRepostioriesQueryData } from '../../core/typings/repositories';
import { TUseRepositories } from './types';

import { createNewRowsDataArray } from './utils';

import { GET_REPOSITORY_SERVICE_KEY } from '../../utils/constants';

const REPOSITORIES = ServiceFactory.get<typeof GET_REPOSITORY_SERVICE_KEY>(GET_REPOSITORY_SERVICE_KEY);

export const useRepositories: TUseRepositories = () => {
  const searchRequest = useRef<false | number | NodeJS.Timeout>();
  const [searchedPhrase, setSearchedPhrase] = useState<ReturnType<TUseRepositories>['searchedPhrase']>();
  const { loading, error, data } = searchedPhrase
    ? useQuery<TRepostioriesQueryData>(REPOSITORIES.getBySearchingPhrase(), {
        variables: { searchedPhrase }
      })
    : useQuery<TRepostioriesQueryData>(REPOSITORIES.get());

  const onChange: ReturnType<TUseRepositories>['onChange'] = (event) => {
    if (searchRequest.current) {
      // if previous debounced request exist, clear it
      clearTimeout(searchRequest.current as number);
      searchRequest.current = undefined;
    }

    return setTimeout(() => {
      setSearchedPhrase(event.target.value);
    }, 800);
  };

  return { searchedPhrase, loading, error, rows: data ? createNewRowsDataArray(data) : [], onChange };
};
