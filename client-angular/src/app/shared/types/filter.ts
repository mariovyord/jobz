export interface IFilterOption {
  id: string;
  key: string;
}

export interface IFilter {
  key: string;
  id: string;
  options: IFilterOption[];
}
