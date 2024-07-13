export interface Get {
  endpoint: string;
  headers?: unknown;
}

export interface HttpClientResponse<T> {
  data: T;
}

/**
 * Interface configuration depends on which http client is being used
 */
export interface HttpClientConfig<D> {
  headers?: any | D;
}
