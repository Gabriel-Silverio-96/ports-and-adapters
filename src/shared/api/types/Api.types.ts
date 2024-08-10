import { HttpError } from "src/shared/api/utils/HttpError";

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpClientResponse<T> {
  data: T;
}

export interface Config {
  headers: Record<string, string | number>;
}

export interface HttpClientConfig<D = any, H = any> {
  payload?: D;
  headers?: H extends { headers: infer H } ? H : any;
}

export type HttpClientPromiseResponse<T> = Promise<
  HttpClientResponse<T> | HttpError
>;

export interface HttpClient {
  get<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T>;

  post<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T>;

  put<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T>;

  patch<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T>;

  delete<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T>;
}
