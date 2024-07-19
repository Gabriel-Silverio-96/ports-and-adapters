import { AxiosError, AxiosResponse } from "axios";
import AxiosInstance from "src/shared/api/adapters/axios/config/AxiosInstance";
import { HttpClientConfig, HttpClientResponse } from "src/shared/api/types";
import HttpError from "src/shared/api/utils/HttpError";
import AxiosConfig from "./utils/AxiosConfig";

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
    try {
      const { data, ...rest } = AxiosConfig.format({ ...config });
      const response = await AxiosInstance.patch(endpoint, data, {
        ...rest,
      });

      return { data: response.data };
    } catch (e) {
      // IsAxiosError is not used to reduce the complexity of tests
      const error = e as AxiosError;
      const { status } = error.response as AxiosResponse;

      throw new HttpError({ status: status });
    }
  }
}
