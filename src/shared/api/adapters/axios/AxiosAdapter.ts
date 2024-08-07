import type {
  HttpClient,
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types";
import { AxiosInstance } from "src/shared/api/adapters/axios/utils/AxiosInstance";
import HttpError from "src/shared/api/utils/HttpError";

/**
 * Provides methods to make HTTP requests using Axios.
 */
class AxiosAdapter extends AxiosInstance implements HttpClient {
  public async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError> {
    return await this.axios(endpoint, config, "GET");
  }

  public async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError> {
    return await this.axios(endpoint, config, "POST");
  }

  public async put<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError> {
    return await this.axios(endpoint, config, "PUT");
  }

  public async patch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError> {
    return await this.axios(endpoint, config, "PATCH");
  }

  public async delete<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T> | HttpError> {
    return await this.axios(endpoint, config, "DELETE");
  }
}

export { AxiosAdapter };
