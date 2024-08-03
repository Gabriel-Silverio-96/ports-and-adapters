export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

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

export interface HttpClient {
  get<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>>;

  post<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>>;

  put<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>>;

  patch<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>>;

  delete<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>>;
}
