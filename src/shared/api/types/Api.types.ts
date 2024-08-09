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

export interface HttpClient {
  get<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError>;

  post<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError>;

  put<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError>;

  patch<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError>;

  delete<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError>;
}
