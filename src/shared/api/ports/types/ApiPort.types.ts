import {
  HttpClientConfig,
  HttpClientResponse,
} from "../../types/ApiAdapter.types";

export interface HttpClient {
  get<T, D>(
    endpoint: string,
    config: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>>;
}
