import { AxiosError, AxiosResponse } from "axios";
import { AxiosInstance } from "src/shared/api/adapters/axios/AxiosInstance";
import {
  HttpClientConfig,
  HttpClientResponse,
  Method,
} from "src/shared/api/types";
import HttpError from "src/shared/api/utils/HttpError";
import { AxiosConfig } from "src/shared/api/adapters/axios/utils/AxiosConfig";

/**
 * Provides methods to make HTTP requests using Axios.
 */
class AxiosAdapter {
  /**
   * Makes an HTTP request to the specified endpoint with the given method and configuration.
   *
   * @template T - The type of the response data.
   * @template D - The type of the request data.
   * @param {string} endpoint - The endpoint to make the request to.
   * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
   * @param {string} method - The HTTP method to use for the request.
   * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data.
   * @throws {HttpError} - Throws an HttpError if the response is an error.
   */
  private async axios<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>,
    method: Method = "GET"
  ): Promise<HttpClientResponse<T>> {
    try {
      const formattedConfig = AxiosConfig.format({ ...config });
      const { data } = await AxiosInstance({
        method,
        url: endpoint,
        ...formattedConfig,
      });

      return { data };
    } catch (e) {
      const error = e as AxiosError;
      const { status, data } = error.response as AxiosResponse;

      throw new HttpError({ status }, data);
    }
  }

  public async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return this.axios(endpoint, config);
  }

  public async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return this.axios(endpoint, config, "POST");
  }

  public async put<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return this.axios(endpoint, config, "PUT");
  }

  public async patch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return this.axios(endpoint, config, "PATCH");
  }
}

export { AxiosAdapter };
