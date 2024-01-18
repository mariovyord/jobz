export interface IApiResponse<T> {
  body: T;
  errors: [] | null;
}
