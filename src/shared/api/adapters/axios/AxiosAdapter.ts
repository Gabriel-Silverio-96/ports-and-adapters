import { AxiosError, AxiosResponse } from "axios";
import { AxiosInstance } from "src/shared/api/adapters/axios/AxiosInstance";
import { HttpClientConfig, HttpClientResponse } from "src/shared/api/types";
import HttpError from "src/shared/api/utils/HttpError";
import { AxiosConfig } from "src/shared/api/adapters/axios/utils/AxiosConfig";

/**
 * Provides methods to make HTTP requests using Axios.
 */
class AxiosAdapter {
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
    try {
      const formatedConfig = AxiosConfig.format({ ...config });
      const { data } = await AxiosInstance.get(endpoint, { ...formatedConfig });

      return { data };
    } catch (e) {
      // IsAxiosError is not used to reduce the complexity of tests
      const error = e as AxiosError;
      const { status } = error.response as AxiosResponse;

      throw new HttpError({ status });
    }
  }
}

export { AxiosAdapter };
