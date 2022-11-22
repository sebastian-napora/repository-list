import { getRepostioryService } from './services/repository-service';

import { GET_REPOSITORY_SERVICE_KEY } from '../utils/constants';

export type TGetServices = {
  [GET_REPOSITORY_SERVICE_KEY]: typeof getRepostioryService;
};

export type TGetServicesNames = keyof TGetServices;

//Object services types
export type TGetServicesKeys = {
  [Key in TGetServicesNames]: TGetServices[Key];
};
