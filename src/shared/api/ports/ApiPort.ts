import {
  Config,
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types/ApiAdapter.types";
import { HttpClient } from "src/shared/api/ports/types";

/**
 * ApiPort will receive adapter.
 *
 * @template T - The type of the response data.
 * @template D - The type of the request data.
 * @param {string} endpoint - The endpoint to make the GET request to.
 * @param {HttpClientConfig<D>} [config] - Optional configuration for the request.
 * @returns {Promise<HttpClientResponse<T>>} - A promise that resolves to the response data
 */
export default class ApiPort implements HttpClient {
  adapter: HttpClient;
  constructor(adapter: HttpClient) {
    this.adapter = adapter;
  }

  public async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    const response = await this.adapter.get<T, D>(endpoint, config || {});

    return response;
  }

  public async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    const response = await this.adapter.post<T, D>(endpoint, config || {});

    return response;
  }

  public async put<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    const response = await this.adapter.put<T, D>(endpoint, config || {});

    return response;
  }

  public async patch<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    const response = await this.adapter.patch<T, D>(endpoint, config || {});

    return response;
  }

  public async delete<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D, Config>
  ): Promise<HttpClientResponse<T>> {
    const response = await this.adapter.delete<T, D>(endpoint, config || {});

    return response;
  }
}
