import {
  HttpClientConfig,
  HttpClientResponse,
} from "../../types/ApiAdapter.types";

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
