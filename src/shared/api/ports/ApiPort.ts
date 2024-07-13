import { HttpClientResponse } from "../types/ApiAdapter.types";
import { HttpClient } from "./types";

export default class ApiPort implements HttpClient {
  port: HttpClient;
  constructor(port: HttpClient) {
    this.port = port;
  }

  async get<T>(endpoint: string): Promise<HttpClientResponse<T>> {
    const { data } = await this.port.get<T>(endpoint);

    return { data };
  }
}
