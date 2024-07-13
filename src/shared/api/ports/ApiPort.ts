import {
  HttpClientConfig,
  HttpClientResponse,
} from "../types/ApiAdapter.types";
import { HttpClient } from "./types";

export default class ApiPort implements HttpClient {
  adapter: HttpClient;
  constructor(adapter: HttpClient) {
    this.adapter = adapter;
  }

  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    const { data } = await this.adapter.get<T, D>(endpoint, config || {});

    return { data };
  }
}
