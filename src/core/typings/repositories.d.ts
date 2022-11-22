export interface IRow {
  name: string;
  stars: number;
  forks: number;
  id: string;
}

export interface IColumn {
  id: 'name' | 'stars' | 'forks';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export type TRepostioriesQueryData = {
  search: {
    edges: {
      node: {
        name: string;
        stargazerCount: number;
        forks: {
          totalCount: number;
        };
        id: string;
      };
    }[];
  };
};
