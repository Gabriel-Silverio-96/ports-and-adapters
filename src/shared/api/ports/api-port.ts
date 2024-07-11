import { Get, GetReponse } from "../types/api-adapter.types";
import { HttpClient } from "./http-client";

class ApiPort implements HttpClient {
  port: HttpClient;
  constructor(port: HttpClient) {
    this.port = port;
  }

  async get({ endpoint }: Get): Promise<GetReponse> {
    const { data } = await this.port.get({ endpoint });

    return { data };
  }
}

export default ApiPort;
