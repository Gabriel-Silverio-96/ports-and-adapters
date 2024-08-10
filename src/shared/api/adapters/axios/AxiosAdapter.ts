import type {
  HttpClient,
  HttpClientConfig,
  HttpClientPromiseResponse,
} from "src/shared/api/types";
import { AxiosInstance } from "src/shared/api/adapters/axios/utils/AxiosInstance";

/**
 * Provides methods to make HTTP requests using Axios.
 */
class AxiosAdapter extends AxiosInstance implements HttpClient {
  public async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T> {
    return await this.axios(endpoint, config, "GET");
  }

  public async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T> {
    return await this.axios(endpoint, config, "POST");
  }

  public async put<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T> {
    return await this.axios(endpoint, config, "PUT");
  }

  public async patch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T> {
    return await this.axios(endpoint, config, "PATCH");
  }

  public async delete<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): HttpClientPromiseResponse<T> {
    return await this.axios(endpoint, config, "DELETE");
  }
}

export { AxiosAdapter };
