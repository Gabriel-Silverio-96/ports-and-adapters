import {
  Config,
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types/ApiAdapter.types";
import { FetchConfig } from "src/shared/api/adapters/fetch/utils/FetchConfig";
import { API } from "src/app.constants";
import { FetchErrorHandler } from "src/shared/api/adapters/fetch/utils/FetchErrorHandler";
import { DEFAULT_FETCH_CONFIG } from "src/shared/api/adapters/fetch/FetchAdapter.constants";

/**
 * Provides methods to make HTTP requests using the Fetch API.
 */
class FetchAdapter {
  /**
   * Makes an HTTP request to the specified endpoint with optional configuration and method.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the request.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @param {string} [method] - The HTTP method to use for the request (e.g., "GET", "POST").
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   * @throws {HttpError} - Throws an HttpError if the response status is not OK.
   * @private
   */
  private async fetch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>,
    method?: string
  ): Promise<HttpClientResponse<T>> {
    const { headers, ...rest } = FetchConfig.format({ ...config });

    const response = await fetch(`${API.BASE_URL}${endpoint}`, {
      method,
      headers: { ...DEFAULT_FETCH_CONFIG.HEADERS, ...headers },
      ...rest,
    });

    await FetchErrorHandler.responseError(response);

    const data = await response.json();
    return { data };
  }

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
}

export { FetchAdapter };
