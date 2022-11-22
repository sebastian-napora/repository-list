import { getRepostioryService } from './services/repository-service';

import { TGetServices, TGetServicesKeys, TGetServicesNames } from './types';

import { GET_REPOSITORY_SERVICE_KEY } from '../utils/constants';

export const getServices: TGetServicesKeys = {
  [GET_REPOSITORY_SERVICE_KEY]: getRepostioryService
};

export const ServiceFactory = {
  get: <ServiceName extends TGetServicesNames>(name: TGetServicesNames): TGetServices[ServiceName] =>
    getServices[name] as TGetServices[ServiceName]
};
