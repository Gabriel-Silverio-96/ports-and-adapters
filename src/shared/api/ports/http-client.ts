import { Get, HttpClientResponse } from "../types/api-adapter.types";

export interface HttpClient {
  get<T>({ endpoint }: Get): Promise<HttpClientResponse<T>>;
}
