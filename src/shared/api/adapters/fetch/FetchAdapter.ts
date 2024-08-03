import type {
  Config,
  HttpClient,
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types";
import { FetchInstance } from "src/shared/api/adapters/fetch/utils/FetchInstance";

/**
 * Provides methods to make HTTP requests using the Fetch API.
 */
class FetchAdapter extends FetchInstance implements HttpClient {
  public async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "GET");
  }

  public async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "POST");
  }

  public async put<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "PUT");
  }

  public async patch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "PATCH");
  }

  public async delete<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "DELETE");
  }
}

export { FetchAdapter };
