import { HttpClientConfig, HttpClientResponse } from "src/shared/api/types";
import AxiosInstance from "src/shared/api/adapters/axios/config/AxiosInstance";

/**
 * Provides methods to make HTTP requests using Axios.
 */
export default class AxiosAdapter {
  /**
   * Makes a GET request to the specified endpoint with optional configuration.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the GET request to.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   */
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return await AxiosInstance.get(endpoint, { ...config });
  }
}
