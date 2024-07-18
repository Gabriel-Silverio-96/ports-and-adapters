import {
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types/ApiAdapter.types";
import { HttpClient } from "src/shared/api/ports/types";

/**
 * ApiPort will receive adapter.
 * Implements the HttpClient interface.
 */
export default class ApiPort implements HttpClient {
  adapter: HttpClient;
  constructor(adapter: HttpClient) {
    this.adapter = adapter;
  }
  /**
   * Makes a GET request to the specified endpoint with optional configuration.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the GET request to.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data
   */
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    const { data } = await this.adapter.get<T, D>(endpoint, config || {});

    return { data };
  }
}
