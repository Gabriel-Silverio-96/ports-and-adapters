export interface Get {
  endpoint: string;
  headers?: unknown;
}

export interface HttpClientResponse<T> {
  data: T;
}
