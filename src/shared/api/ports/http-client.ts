import { HttpClientResponse } from "../types/api-adapter.types";

export interface HttpClient {
  get<T>(endpoint: string): Promise<HttpClientResponse<T>>;
}
