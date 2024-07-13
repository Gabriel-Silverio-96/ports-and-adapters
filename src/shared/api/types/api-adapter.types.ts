export interface Get {
  endpoint: string;
  headers?: unknown;
}

export interface GetReponse<T> {
  data: T;
}
