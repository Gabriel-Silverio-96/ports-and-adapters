import { API } from "src/app.constants";
import { DEFAULT_FETCH_CONFIG } from "src/shared/api/adapters/fetch/FetchAdapter.constants";
import { FetchConfig } from "src/shared/api/adapters/fetch/utils/FetchConfig";
import { FetchErrorHandler } from "src/shared/api/adapters/fetch/utils/FetchErrorHandler";
import {
  Config,
  HttpClientConfig,
  HttpClientResponse,
  Method,
} from "src/shared/api/types";
import { HttpError } from "src/shared/api/utils/HttpError";

/**
 * Represents an Fetch API instance for making HTTP requests.
 */
class FetchInstance {
  /**
   * Makes an HTTP request to the specified endpoint with optional configuration and method.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the request.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @param {string} [method] - The HTTP method to use for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   * @throws {HttpError} - Throws an HttpError if the response status is not OK.
   */
  public async fetch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>,
    method: Method = "GET"
  ): Promise<HttpClientResponse<T> | HttpError> {
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
}

export { FetchInstance };
