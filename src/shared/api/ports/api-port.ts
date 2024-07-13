import { Get, HttpClientResponse } from "../types/api-adapter.types";
import { HttpClient } from "./http-client";

class ApiPort implements HttpClient {
  port: HttpClient;
  constructor(port: HttpClient) {
    this.port = port;
  }

  async get<T>({ endpoint }: Get): Promise<HttpClientResponse<T>> {
    const { data } = await this.port.get<T>({ endpoint });

    return { data };
  }
}

export default ApiPort;
