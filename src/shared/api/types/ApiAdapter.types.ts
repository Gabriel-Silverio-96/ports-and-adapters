export interface Get {
  endpoint: string;
  headers?: unknown;
}

export interface HttpClientResponse<T> {
  data: T;
}

export interface Config {
  headers: { [key: string]: any };
}

export interface HttpClientConfig<D = any, H = any> {
  payload?: D;
  headers?: H extends { headers: infer H } ? H : any;
}
