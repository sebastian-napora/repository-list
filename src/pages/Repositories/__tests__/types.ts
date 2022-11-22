import {
  LOADING_WRAPPER_DATA_TEST_ID,
  ERROR_MESSAGE_DATA_TEST_ID,
  CONTAINER_TABLE_WRAPPER_DATA_TEST_ID
} from '../constants';

export interface IItEachRepostioriesPage {
  numberTest: number;
  dataTestId:
    | typeof LOADING_WRAPPER_DATA_TEST_ID
    | typeof ERROR_MESSAGE_DATA_TEST_ID
    | typeof CONTAINER_TABLE_WRAPPER_DATA_TEST_ID;
}
