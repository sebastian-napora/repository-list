import { IRow } from '../../../core/typings/repositories';

export type TCreateData = (name: string, stars: number, forks: number, id: string, url: string) => IRow;
