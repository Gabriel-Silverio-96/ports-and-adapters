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
   * Makes a GET request to the specified endpoint with optional configuration.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the GET request to.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   * @throws {HttpError} - Throws an HttpError if the response status is not OK.
   */
  public async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "GET");
  }

  /**
   * Makes a POST request to the specified endpoint with optional configuration.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the POST request to.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   * @throws {HttpError} - Throws an HttpError if the response status is not OK.
   */
  public async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    return this.fetch(endpoint, config, "POST");
  }

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

    await FetchErrorHandler.ResponseError(response);

    const data = await response.json();
    return { data };
  }
}

export { FetchAdapter };
