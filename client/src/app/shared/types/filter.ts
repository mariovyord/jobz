export interface IFilter {
  id: string;
  name: string;
  type: string;
}

export interface IFilterByType {
  type: string;
  options: IFilter[];
}
