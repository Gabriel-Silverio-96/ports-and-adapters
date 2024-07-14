import { API } from "src/app.constants.ts";
import {
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types/ApiAdapter.types";
import FetchErrorHandler from "src/shared/api/adapters/fetch/utils/FetchErrorHandler";

/**
 * Provides methods to make HTTP requests using the Fetch API.
 */
export default class FetchAdapter {
  /**
   * Makes a GET request to the specified endpoint with optional configuration.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the GET request to.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   * @throws {Error} - Throws an error if the response status is not OK.
   */
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    const response = await fetch(`${API.BASE_URL}${endpoint}`, {
      method: "GET",
      ...config,
    });

    FetchErrorHandler.ResponseError(response);
    const data = await response.json();

    return { data };
  }
}
